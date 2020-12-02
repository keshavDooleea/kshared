import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomFiles } from 'src/app/classes/files';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private files: CustomFiles[];
  private fileSubscription: BehaviorSubject<CustomFiles[]>;

  constructor() {
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
            base64: imageData,
            name: newFiles[i].name,
            date: newFiles[i].lastModified,
          });
        })
        .catch((error) => console.log(error));
    }

    this.fileSubscription.next(this.files);
  }

  clearFiles(): void {
    this.files = [];
    this.fileSubscription.next(this.files);
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
