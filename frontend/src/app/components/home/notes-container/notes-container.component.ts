import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotesService } from 'src/app/services/notes/notes.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit, OnDestroy {
  textareaValue: string;
  private socketSubscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private noteService: NotesService,
    private socketService: SocketService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscribeToSocket();
    this.subscribeToUser();
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  saveTextarea(): void {
    if (!this.textareaValue) {
      return;
    }

    this.noteService.addNote(this.textareaValue);
  }

  onShiftEnter(event: Event): void {
    (event.target as HTMLTextAreaElement).blur();
    this.saveTextarea();
  }

  onKeyup(): void {
    this.noteService.saveCurrentText(this.textareaValue);
  }

  clearTextarea(): void {
    this.textareaValue = '';
    this.noteService.saveCurrentText(this.textareaValue);
  }

  private subscribeToSocket(): void {
    this.socketSubscription = this.socketService
      .listen('updatedText')
      .subscribe((data) => {
        console.log('In updatedText: ', data);
        this.textareaValue = data;
      });
  }

  private subscribeToUser(): void {
    this.userSubscription = this.userService
      .getUserObservable()
      .subscribe((user) => {
        if (user) {
          this.textareaValue = user.user.currentText;
        }
      });
  }
}
