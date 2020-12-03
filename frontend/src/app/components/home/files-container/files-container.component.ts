import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomFiles } from 'src/app/classes/files';
import { FilesService } from 'src/app/services/files/files.service';

@Component({
  selector: 'app-files-container',
  templateUrl: './files-container.component.html',
  styleUrls: ['./files-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilesContainerComponent implements OnInit, OnDestroy {
  files: CustomFiles[];
  private fileSubscription: Subscription;

  constructor(private fileService: FilesService) {}

  ngOnInit(): void {
    this.subscribeToFile();
  }

  ngOnDestroy(): void {
    this.fileSubscription.unsubscribe();
  }

  onFileInput(newFiles: FileList): void {
    this.fileService.addFiles(newFiles);
  }

  deleteFile(index: number): void {
    this.fileService.deleteFile(index);
  }

  clearFiles(): void {
    this.fileService.clearFiles();
  }

  downloadFile(file: CustomFiles, anchorTag: HTMLAnchorElement): void {
    // [href]="file.base64 | safeUrl"
    anchorTag.href = file.base64 as string;

    setTimeout(() => {
      anchorTag.href = '';
    }, 200);
  }

  resetHref(): void {}

  private subscribeToFile(): void {
    this.fileSubscription = this.fileService
      .getFilesObservable()
      .subscribe((newFiles) => {
        this.files = newFiles;
      });
  }
}
