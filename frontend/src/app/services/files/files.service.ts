import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ActionFile, CustomFiles } from 'src/app/classes/files';
import { SERVER_URL } from 'src/app/declarations/server-params';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SocketService } from '../web-socket/socket.service';

const MAX_SIZE = 200; // MB
const MAX_MONGO_SIZE = 15; // MB

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private files: CustomFiles[];
  private spinners: number[];
  private spinnerSubject: Subject<number[]>;
  private fileSubscription: BehaviorSubject<CustomFiles[]>;

  constructor(
    private localStorageService: LocalStorageService,
    private socketService: SocketService,
    private http: HttpClient
  ) {
    this.files = [];
    this.spinners = [];
    this.spinnerSubject = new Subject<number[]>();
    this.fileSubscription = new BehaviorSubject<CustomFiles[]>(this.files);
  }

  getFilesObservable(): Observable<CustomFiles[]> {
    return this.fileSubscription.asObservable();
  }

  getSpinnerObservable(): Observable<number[]> {
    return this.spinnerSubject.asObservable();
  }

  postFiles(newFiles: FileList): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < newFiles.length; i++) {
      const mbSize = parseFloat((newFiles[i].size / (1024 * 1024)).toFixed(2));
      if (mbSize <= MAX_SIZE) {
        this.spinners.push(i);
        this.spinnerSubject.next(this.spinners);
        this.postFile(newFiles.item(i), mbSize);
      }
    }
  }

  private async postFile(file: File, mbSize: number): Promise<void> {
    const formData = new FormData();
    formData.append('token', this.localStorageService.getToken());
    formData.append('file', file);

    if (mbSize < MAX_MONGO_SIZE) {
      const base64 = await this.getBase64(file);
      formData.append('base64', JSON.stringify(base64));
    }

    const headers = {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    this.http
      .post<CustomFiles>(`${SERVER_URL}`, formData, { headers })
      .subscribe((data) => {
        this.spinners.pop();
        this.spinnerSubject.next(this.spinners);
      });
  }

  addCustomFiles(file: CustomFiles): void {
    if (this.files.includes(file)) {
      return;
    }

    this.files.push(file);
    this.fileSubscription.next(this.files);
  }

  deleteFile(index: number): void {
    if (!this.files[index].isLocked) {
      delete this.files[index].base64; // remove base64

      const data = {
        token: this.localStorageService.getToken(),
        file: this.files[index],
        index,
      };

      this.socketService.emit('deleteFile', data);
      this.fileSubscription.next(this.files);
    }
  }

  clearFiles(): void {
    // remove base64 from object cuz too large
    this.files.forEach((file) => delete file.base64);

    const data = {
      token: this.localStorageService.getToken(),
      files: this.files,
    };
    this.socketService.emit('clearFiles', data);
  }

  toggleLock(index: number): void {
    this.files[index].isLocked = !this.files[index].isLocked;

    const data = {
      token: this.localStorageService.getToken(),
      file: this.files[index],
      index,
    };

    this.socketService.emit('lockFile', data);
    this.fileSubscription.next(this.files);
  }

  updateLockFile(file: ActionFile): void {
    this.files[file.index].isLocked = file.file.isLocked;
    this.fileSubscription.next(this.files);
  }

  deleteSingleFile(file: ActionFile): void {
    this.files.splice(file.index, 1);
    this.fileSubscription.next(this.files);
  }

  clearUnlockedFiles(): void {
    this.files = this.files.filter((value) => {
      return value.isLocked;
    });
    this.fileSubscription.next(this.files);
  }

  setFiles(files: CustomFiles[]): void {
    this.files = files;
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
