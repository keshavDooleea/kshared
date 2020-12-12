import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  textareaValue: string;

  constructor(
    private noteService: NotesService,
    private socketService: SocketService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.socketService.listen('updatedText').subscribe((data) => {
      console.log(data);
      this.textareaValue = data;
    });

    this.userService.getUserObservable().subscribe((user) => {
      if (user) {
        this.textareaValue = user.user.currentText;
      }
    });
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
  }
}
