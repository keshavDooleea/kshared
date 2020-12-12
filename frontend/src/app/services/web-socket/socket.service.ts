import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { SERVER_URL } from 'src/app/declarations/server-params';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;

  constructor(private localStorage: LocalStorageService) {
    this.initialiseSocket();
  }

  private initialiseSocket(): void {
    const token = this.localStorage.getToken();
    const query = token ? token : '';
    this.socket = io(SERVER_URL, { query: `token=${query}` });
  }

  listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(event, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }
}
