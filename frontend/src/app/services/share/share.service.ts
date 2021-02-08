import { Injectable } from '@angular/core';
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
      users: this.sharedUsers,
    };

    this.socket.emit('sendNoteNotifications', data);
  }

  removeNotification(notification: Notification): void {
    const data = {
      token: this.currentUser.getToken(),
      from: notification.from,
      notifID: notification._id,
    };

    this.socket.emit('removeNotification', data);
  }

  removeShareUser(index: number): void {
    this.sharedUsers.splice(index, 1);
  }
}
