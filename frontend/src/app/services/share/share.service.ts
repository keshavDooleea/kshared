import { Injectable } from '@angular/core';
import { Note } from 'src/app/classes/Note';
import { DbUsers } from 'src/app/classes/user';
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
      noteID: note._id,
      users: this.sharedUsers,
    };

    this.socket.emit('sendNoteNotifications', data);
  }

  removeShareUser(index: number): void {
    this.sharedUsers.splice(index, 1);
  }
}
