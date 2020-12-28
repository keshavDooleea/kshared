import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomFiles } from 'src/app/classes/files';
import { FilesService } from 'src/app/services/files/files.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';
import { ResizeService } from 'src/app/services/window-resize/resize.service';

@Component({
  selector: 'app-files-container',
  templateUrl: './files-container.component.html',
  styleUrls: ['./files-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilesContainerComponent implements OnInit, OnDestroy {
  emptyContainerText: string;
  files: CustomFiles[];
  spinners: number[] = [];
  shouldStayFixed: boolean;
  shouldShowExistMsg: boolean;
  private subscriptions: Subscription[] = [];

  @ViewChild('fileContainer') fileContainer: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private fileService: FilesService,
    private userService: UserService,
    private socketService: SocketService,
    private elementRef: ElementRef,
    private resizeService: ResizeService
  ) {}

  ngOnInit(): void {
    this.shouldStayFixed = false;
    this.subscribeToWindowSize();
    this.subscribeToFile();
    this.subscribeToSpinner();
    this.subscribeToSocket();
    this.subscribeToUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  openInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileInput(newFiles: FileList): void {
    this.shouldStayFixed = false;
    this.fileService.postFiles(newFiles);
    this.fileInput.nativeElement.value = '';
  }

  deleteFile(index: number): void {
    this.shouldStayFixed = true;
    this.fileService.deleteFile(index);
  }

  clearFiles(): void {
    this.shouldStayFixed = false;
    this.fileService.clearFiles();
  }

  toggleLock(index: number): void {
    this.shouldStayFixed = true;
    this.fileService.toggleLock(index);
  }

  downloadFile(file: CustomFiles, index: number): void {
    // [href]="file.base64 | safeUrl"

    if (file.isMongoFile) {
      this.anchorTags[index].href = file.base64 as string;
      return;
    }

    // means that the anchor tag contains the link
    if (file.amazonURL) {
      this.downloadTempFile(index, file.amazonURL);
      return;
    }

    const data = {
      index,
      name: file.name,
      amazonName: file.amazonName,
    };

    this.socketService.emit('getSignedUrl', data);
  }

  private showDuplicateMsg(): void {
    this.shouldShowExistMsg = true;
    setTimeout(() => (this.shouldShowExistMsg = false), 2000);
  }

  private subscribeToWindowSize(): void {
    this.subscriptions.push(
      this.resizeService.getWindowSizeObservable().subscribe((isWindows) => {
        if (isWindows) {
          this.emptyContainerText = ` <h4>
                                        Press the <i class="fas fa-plus-square"></i> icon or letter
                                        '<span>O</span>' to upload files
                                      </h4>
                                      <h4>Or drag & drop files here!</h4>
                                      <p>(Max 200MB per file)</p>`;
        } else {
          this.emptyContainerText = ` <h4>
                                        Press the <i class="fas fa-plus-square"></i> icon to upload files!
                                      </h4>
                                      <p>(Max 200MB per file)</p>`;
        }
      })
    );
  }

  private subscribeToFile(): void {
    this.subscriptions.push(
      this.fileService.getFilesObservable().subscribe((newFiles) => {
        this.files = newFiles;

        if (this.fileContainer && !this.shouldStayFixed) {
          this.fileContainer.nativeElement.scrollLeft = this.fileContainer.nativeElement.scrollWidth;
        }
      })
    );

    this.subscriptions.push(
      this.fileService.getFilesExistsObservable().subscribe(() => {
        this.showDuplicateMsg();
      })
    );
  }

  private subscribeToSpinner(): void {
    this.subscriptions.push(
      this.fileService.getSpinnerObservable().subscribe((newSpinners) => {
        this.spinners = newSpinners;
      })
    );
  }

  private subscribeToSocket(): void {
    this.subscriptions.push(
      this.socketService.listen('uploadedFile').subscribe((file) => {
        this.fileService.addCustomFiles(file);
      })
    );

    // toggling file lock
    this.subscriptions.push(
      this.socketService.listen('toggledLock').subscribe((index) => {
        this.fileService.updateLockFile(index);
      })
    );

    // delete single file
    this.subscriptions.push(
      this.socketService.listen('deleteSingleFile').subscribe((index) => {
        this.fileService.deleteSingleFile(index);
      })
    );

    // when cleared all files
    this.subscriptions.push(
      this.socketService.listen('clearedFiles').subscribe(() => {
        this.fileService.clearUnlockedFiles();
      })
    );

    this.subscriptions.push(
      this.socketService.listen('signedUrl').subscribe((data) => {
        this.files[data.index].amazonURL = data.url;
        this.anchorTags[data.index].href = data.url;
        this.anchorTags[data.index].click();

        setTimeout(() => {
          this.anchorTags[data.index].href = '';
        }, 10);
      })
    );
  }

  private downloadTempFile(index: number, url: string): void {
    this.anchorTags[index].href = url;

    setTimeout(() => {
      this.anchorTags[index].href = '';
    }, 10);
  }

  private subscribeToUser(): void {
    this.subscriptions.push(
      this.userService.getUserObservable().subscribe((newUser) => {
        if (newUser) {
          this.shouldStayFixed = false;
          this.fileService.setFiles(newUser.user.files);
        }
      })
    );
  }

  get anchorTags(): HTMLAnchorElement[] {
    return this.elementRef.nativeElement.querySelectorAll('.img-container');
  }
}
