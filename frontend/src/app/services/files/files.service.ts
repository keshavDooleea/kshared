import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomFiles } from 'src/app/classes/files';
import { InnerHtmlService } from 'src/app/services/files/inner-html/inner-html.service';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private files: CustomFiles[];
  private fileSubscription: BehaviorSubject<CustomFiles[]>;

  constructor(private innerHtmlService: InnerHtmlService) {
    this.files = [];
    this.fileSubscription = new BehaviorSubject<CustomFiles[]>(this.files);
  }

  getFilesObservable(): Observable<CustomFiles[]> {
    return this.fileSubscription.asObservable();
  }

  addFiles(newFiles: FileList): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < newFiles.length; i++) {
      this.getBase64(newFiles[i])
        .then((imageData) => {
          this.files.push({
            isLocked: false,
            base64: imageData,
            size: newFiles[i].size,
            name: newFiles[i].name,
            date: newFiles[i].lastModified,
            innerHtml: this.innerHtmlService.getInnerHTML(
              imageData,
              newFiles[i].name
            ),
          });
        })
        .catch((error) => console.log(error));
    }

    this.fileSubscription.next(this.files);
  }

  deleteFile(index: number): void {
    if (!this.files[index].isLocked) {
      this.files.splice(index, 1);
      this.fileSubscription.next(this.files);
    }
  }

  clearFiles(): void {
    this.files = this.files.filter((value) => {
      return value.isLocked;
    });
    this.fileSubscription.next(this.files);
  }

  toggleLock(index: number): void {
    this.files[index].isLocked = !this.files[index].isLocked;
    this.fileSubscription.next(this.files);
  }

  formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) {
      return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  private getBase64(file: File): Promise<ArrayBuffer | string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
