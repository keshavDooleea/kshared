import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomFiles } from 'src/app/classes/files';
import { FilesService } from 'src/app/services/files/files.service';

@Component({
  selector: 'app-files-container',
  templateUrl: './files-container.component.html',
  styleUrls: ['./files-container.component.scss'],
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
    console.log(newFiles);

    this.fileService.addFiles(newFiles);
  }

  private subscribeToFile(): void {
    this.fileSubscription = this.fileService
      .getFilesObservable()
      .subscribe(async (newFiles) => {
        this.files = newFiles;
      });
  }
}
