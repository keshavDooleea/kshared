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
  copiedText: string[] = [];
  savedText: string[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private noteService: NotesService,
    private socketService: SocketService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscribeToSocket();
    this.subscribeToUser();
    this.subscribeToNoteExistance();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  saveTextarea(): void {
    if (!this.textareaValue) {
      return;
    }

    this.copiedText = [];
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
    this.copiedText = [];
    this.savedText = [];
    this.textareaValue = '';
    this.noteService.saveCurrentText(this.textareaValue);
  }

  copyToClipboard(noteTextarea: HTMLTextAreaElement): void {
    this.savedText = [];
    noteTextarea.select();
    document.execCommand('copy');
    noteTextarea.setSelectionRange(0, 0);
    this.copiedText.push(noteTextarea.value);
  }

  private subscribeToSocket(): void {
    this.subscriptions.push(
      this.socketService.listen('updatedText').subscribe((data) => {
        this.textareaValue = data;
      })
    );
  }

  private subscribeToNoteExistance(): void {
    this.subscriptions.push(
      this.noteService.getNoteExistObservable().subscribe((exists) => {
        if (!exists) {
          this.savedText.push(this.textareaValue);
        }
      })
    );
  }

  private subscribeToUser(): void {
    this.subscriptions.push(
      this.userService.getUserObservable().subscribe((user) => {
        if (user) {
          this.textareaValue = user.user.currentText;
        }
      })
    );
  }
}
