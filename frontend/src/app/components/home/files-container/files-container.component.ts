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

  constructor(
    private fileService: FilesService,
    private userService: UserService,
    private socketService: SocketService
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

  onFileInput(newFiles: FileList): void {
    this.shouldStayFixed = false;
    this.fileService.postFiles(newFiles);
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

  downloadFile(file: CustomFiles, anchorTag: HTMLAnchorElement): void {
    // [href]="file.base64 | safeUrl"
    anchorTag.href = file.amazonUrl;

    setTimeout(() => {
      anchorTag.href = '';
    }, 1);
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
      this.socketService.listen('toggledLock').subscribe((file) => {
        this.fileService.updateLockFile(file);
      })
    );

    // delete single file
    this.subscriptions.push(
      this.socketService.listen('deleteSingleFile').subscribe((file) => {
        this.fileService.deleteSingleFile(file);
      })
    );

    // when cleared all files
    this.subscriptions.push(
      this.socketService.listen('clearedFiles').subscribe(() => {
        this.fileService.clearUnlockedFiles();
      })
    );
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
}
