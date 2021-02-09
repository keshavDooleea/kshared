import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomFiles } from 'src/app/classes/files';
import { Note } from 'src/app/classes/Note';
import { DbUsers } from 'src/app/classes/user';
import { FilesService } from 'src/app/services/files/files.service';
import { ShareService } from 'src/app/services/share/share.service';
import { UserService } from 'src/app/services/user/user.service';

type Item = Note | CustomFiles;

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  @Output() showShareModal = new EventEmitter<boolean>();
  @Input() currentItem: Item;
  shareUserText: string;
  hasFoundUser: boolean;
  notificationSent: boolean;

  constructor(
    private shareService: ShareService,
    private userService: UserService,
    private fileService: FilesService
  ) {
    this.getAddedShareUsers();
  }

  ngOnInit(): void {}

  getCurrentIcon(): string {
    const file = this.currentItem as CustomFiles;

    if (file && file.innerHTML) {
      const newIcon =
        file.innerHTML.slice(0, 10) +
        'current-icon ' +
        file.innerHTML.slice(10);
      return newIcon;
    } else {
      return `<i class="fas fa-sticky-note current-icon"></i>`;
    }
  }

  getSharedUsersLength(): number {
    return this.shareService.sharedUsers.length;
  }

  getAddedShareUsers(): DbUsers[] {
    return this.shareService.sharedUsers;
  }

  checkIfShareUserExists(): boolean {
    return this.shareService.sharedUsers.some(
      (user) => user.username.toLowerCase() === this.shareUserText
    );
  }

  onModalClicked(event: Event): void {
    if (event.target !== event.currentTarget) {
      return;
    }

    this.cancelShare();
  }

  onShareUserChange(): void {
    this.hasFoundUser = this.userService
      .getAllUsers()
      .some(
        (user) =>
          user.username.toLowerCase() === this.shareUserText.toLowerCase()
      );
  }

  addShareUser(): void {
    if (!this.hasFoundUser || this.checkIfShareUserExists()) {
      return;
    }

    const foundUser: DbUsers[] = this.userService
      .getAllUsers()
      .filter((user) => user.username.toLowerCase() === this.shareUserText);

    this.shareService.sharedUsers.push(foundUser[0]);
    this.shareUserText = '';
    this.hasFoundUser = false;
  }

  sendNotification(): void {
    if ('size' in this.currentItem) {
      this.shareService.shareFile(this.currentItem as CustomFiles);
    } else {
      this.shareService.shareNote(this.currentItem as Note);
    }
    this.notificationSent = true;
  }

  cancelShare(): void {
    this.hasFoundUser = false;
    this.notificationSent = false;
    this.shareUserText = '';
    this.shareService.sharedUsers = [];
    this.showShareModal.emit(false);
  }
}
