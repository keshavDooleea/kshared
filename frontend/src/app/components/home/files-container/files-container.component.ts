import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilesService } from 'src/app/services/files/files.service';

@Component({
  selector: 'app-files-container',
  templateUrl: './files-container.component.html',
  styleUrls: ['./files-container.component.scss'],
})
export class FilesContainerComponent implements OnInit, OnDestroy {
  files: File[];
  private fileSubscription: Subscription;

  constructor(private fileService: FilesService) {}

  ngOnInit(): void {
    this.subscribeToFile();
  }

  ngOnDestroy(): void {
    this.fileSubscription.unsubscribe();
  }

  onFileInput(files: FileList): void {
    this.fileService.addFiles(files);
  }

  private subscribeToFile(): void {
    this.fileSubscription = this.fileService
      .getFilesObservable()
      .subscribe((newFiles) => {
        this.files = newFiles;
      });
  }
}
