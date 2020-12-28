import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private behaviorSubject: BehaviorSubject<boolean>;

  constructor() {
    this.behaviorSubject = new BehaviorSubject<boolean>(false);
  }

  getWindowSizeObservable(): Observable<boolean> {
    return this.behaviorSubject.asObservable();
  }

  emitWindowSize(isWindows: boolean): void {
    this.behaviorSubject.next(isWindows);
  }
}
