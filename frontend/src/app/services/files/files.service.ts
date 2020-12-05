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
            innerHtml: this.addInnerHTML(imageData),
            isLocked: false,
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

  private getBase64(file: File): Promise<ArrayBuffer | string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  private addInnerHTML(imageData: string | ArrayBuffer): string {
    // images
    if (
      (imageData as string).startsWith('data:image/jpeg;base64,') ||
      (imageData as string).startsWith('data:image/png;base64,')
      // (imageData as string).startsWith('data:image/svg+xml;base64,')
    ) {
      return `<img src="${imageData}" alt="imageBase64" class="img-html"/>`;
    }

    // videos
    if ((imageData as string).startsWith('data:video/mp4;base64,')) {
      return '<i class="fas fa-file-video icon"></i>';
      // return `<video class="img-html">
      //     <source src="${imageData}" type="video/mp4" />
      //   </video>`;
    }

    // icon
    if ((imageData as string).startsWith('data:image/x-icon;base64,')) {
      return '<i class="fas fa-file-image icon"></i>';
    }

    // pdf
    if ((imageData as string).startsWith('data:application/pdf;base64,')) {
      return `<i class="fas fa-file-pdf icon"></i>`;
    }

    // txt files
    if ((imageData as string).startsWith('data:text/plain;base64,')) {
      return `<i class="fas fa-file-alt icon"></i>`;
    }

    // word doc
    if (
      (imageData as string).startsWith(
        'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,'
      )
    ) {
      return `<i class="fas fa-file-word icon"></i>`;
    }

    // excel files
    if (
      (imageData as string).startsWith(
        'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,'
      )
    ) {
      return `<i class="fas fa-file-excel icon"></i>`;
    }

    // powerpoint
    if (
      (imageData as string).startsWith(
        'data:application/vnd.ms-powerpoint;base64,'
      ) ||
      (imageData as string).startsWith(
        'data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64,'
      )
    ) {
      return `<i class="fas fa-file-powerpoint icon"></i>`;
    }

    // audio
    if ((imageData as string).startsWith('data:audio/mpeg;base64,')) {
      return `<i class="fas fa-file-audio icon"></i>`;
    }

    // zip files
    if (
      (imageData as string).startsWith(
        'data:application/x-zip-compressed;base64,'
      )
    ) {
      return `<i class="fas fa-file-archive icon"></i>`;
    }

    // code files
    if (
      (imageData as string).startsWith(
        'data:application/octet-stream;base64,'
      ) ||
      (imageData as string).startsWith('data:text/javascript;base64,') ||
      (imageData as string).startsWith('data:text/css;base64,') ||
      (imageData as string).startsWith('data:text/html;base64,')
    ) {
      console.log('DWW');
      return `<i class="fas fa-file-code icon"></i>`;
    }

    // other types
    return `<i class="fas fa-file icon other-icon"></i>`;
  }
}
