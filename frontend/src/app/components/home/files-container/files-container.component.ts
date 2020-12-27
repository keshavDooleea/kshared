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

@Component({
  selector: 'app-files-container',
  templateUrl: './files-container.component.html',
  styleUrls: ['./files-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilesContainerComponent implements OnInit, OnDestroy {
  files: CustomFiles[];
  spinners: number[] = [];
  shouldStayFixed: boolean;
  private subscriptions: Subscription[] = [];

  @ViewChild('fileContainer') fileContainer: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private fileService: FilesService,
    private userService: UserService,
    private socketService: SocketService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.shouldStayFixed = false;
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

  onFileInput(newFiles: FileList, input: HTMLInputElement): void {
    this.shouldStayFixed = false;
    this.fileService.postFiles(newFiles);
    input.value = '';
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

  private subscribeToFile(): void {
    this.subscriptions.push(
      this.fileService.getFilesObservable().subscribe((newFiles) => {
        this.files = newFiles;

        if (this.fileContainer && !this.shouldStayFixed) {
          this.fileContainer.nativeElement.scrollLeft = this.fileContainer.nativeElement.scrollWidth;
        }
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
