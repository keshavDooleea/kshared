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
            innerHtml: this.addInnerHTML(imageData, newFiles[i].name),
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

  private addInnerHTML(
    imageData: string | ArrayBuffer,
    fileName: string
  ): string {
    // images
    if (
      fileName.endsWith('jpeg') ||
      fileName.endsWith('png')
      // fileName.endsWith('svg')
    ) {
      return `<img src="${imageData}" alt="imageBase64" class="img-html"/>`;
    }

    // videos
    if (fileName.endsWith('mp4')) {
      return '<i class="fas fa-file-video icon"></i>';
    }

    // icon
    if ((imageData as string).startsWith('data:image/x-icon;base64,')) {
      return '<i class="fas fa-file-image icon"></i>';
    }

    // pdf
    if (fileName.endsWith('pdf')) {
      return `<i class="fas fa-file-pdf icon"></i>`;
    }

    // txt files
    if (fileName.endsWith('txt') || fileName.endsWith('md')) {
      return `<i class="fas fa-file-alt icon"></i>`;
    }

    // word doc
    if (fileName.endsWith('doc') || fileName.endsWith('docx')) {
      return `<i class="fas fa-file-word icon"></i>`;
    }

    // excel files
    if (fileName.endsWith('xlsx')) {
      return `<i class="fas fa-file-excel icon"></i>`;
    }

    // powerpoint
    if (fileName.endsWith('ppt')) {
      return `<i class="fas fa-file-powerpoint icon"></i>`;
    }

    // audio
    if (fileName.endsWith('mp3')) {
      return `<i class="fas fa-file-audio icon"></i>`;
    }

    // zip files
    if (fileName.endsWith('zip') || fileName.endsWith('rar')) {
      return `<i class="fas fa-file-archive icon"></i>`;
    }

    // code files
    if (
      fileName.endsWith('ts') ||
      fileName.endsWith('js') ||
      fileName.endsWith('css') ||
      fileName.endsWith('scss') ||
      fileName.endsWith('c++') ||
      fileName.endsWith('html')
    ) {
      return `<i class="fas fa-file-code icon"></i>`;
    }

    // other types
    return `<i class="fas fa-file icon other-icon"></i>`;
  }
}
