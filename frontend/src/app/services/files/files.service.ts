import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private files: File[];
  private fileSubscription: BehaviorSubject<File[]>;

  constructor() {
    this.files = [];
    this.fileSubscription = new BehaviorSubject<File[]>(this.files);
  }

  getFilesObservable(): Observable<File[]> {
    return this.fileSubscription.asObservable();
  }

  addFiles(files: FileList): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }

    this.fileSubscription.next(this.files);
  }
}
