import { Injectable } from '@angular/core';
import { CustomFiles } from 'src/app/classes/files';
import { Note } from 'src/app/classes/Note';
import { DbUsers, Notification } from 'src/app/classes/user';
import { UserService } from '../user/user.service';
import { SocketService } from '../web-socket/socket.service';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  sharedUsers: DbUsers[];

  constructor(private socket: SocketService, private currentUser: UserService) {
    this.sharedUsers = [];
  }

  shareNote(note: Note): void {
    if (!note || this.sharedUsers.length === 0) {
      return;
    }

    const data = {
      token: this.currentUser.getToken(),
      refID: note._id,
      name: note.text,
      isNote: true,
      users: this.sharedUsers,
    };

    this.socket.emit('sendNotifications', data);
  }

  shareFile(file: CustomFiles): void {
    if (!file || this.sharedUsers.length === 0) {
      return;
    }

    const data = {
      token: this.currentUser.getToken(),
      refID: file._id,
      name: file.name,
      size: file.size,
      innerHTML: file.innerHTML,
      isNote: false,
      users: this.sharedUsers,
    };

    this.socket.emit('sendNotifications', data);
  }

  removeNotification(notification: Notification): void {
    const data = {
      token: this.currentUser.getToken(),
      from: notification.from,
      notifID: notification._id,
    };

    this.socket.emit('removeNotification', data);
  }

  acceptNotification(notification: Notification): void {
    const data = {
      token: this.currentUser.getToken(),
      from: notification.from,
      type: notification.type,
      refID: notification.refID,
      notifID: notification._id,
    };

    this.socket.emit('acceptNotification', data);
  }

  removeShareUser(index: number): void {
    this.sharedUsers.splice(index, 1);
  }
}
