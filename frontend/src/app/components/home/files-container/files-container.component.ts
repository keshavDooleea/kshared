import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
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
  private fileSubscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private fileService: FilesService,
    private userService: UserService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.subscribeToFile();
    this.subscribeToSocket();
    this.subscribeToUser();
  }

  ngOnDestroy(): void {
    this.fileSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  onFileInput(newFiles: FileList): void {
    this.fileService.postFiles(newFiles);
  }

  deleteFile(index: number): void {
    this.fileService.deleteFile(index);
  }

  clearFiles(): void {
    this.fileService.clearFiles();
  }

  toggleLock(index: number): void {
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
    this.fileSubscription = this.fileService
      .getFilesObservable()
      .subscribe((newFiles) => {
        this.files = newFiles;
      });
  }

  private subscribeToSocket(): void {
    this.socketService.listen('uploadedFile').subscribe((file) => {
      this.fileService.addCustomFiles(file);
    });
  }

  private subscribeToUser(): void {
    this.userSubscription = this.userService
      .getUserObservable()
      .subscribe((newUser) => {
        if (newUser) {
          this.fileService.setFiles(newUser.user.files);
        }
      });
  }
}
