import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NotesService } from 'src/app/services/notes/notes.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit, OnDestroy {
  toggleQuestion: boolean;
  textareaValue: string;
  shouldClearFilter: Subject<boolean>;
  private subscriptions: Subscription[] = [];
  readonly textareaPlaceholder =
    'Quick text\nTip: Your text will always stay here';

  @ViewChild('noteTextarea') noteTextarea: ElementRef;

  constructor(
    private noteService: NotesService,
    private socketService: SocketService,
    private userService: UserService
  ) {
    this.shouldClearFilter = new Subject<boolean>();
  }

  ngOnInit(): void {
    this.subscribeToSocket();
    this.subscribeToUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  toggleQuestionContainer(): void {
    this.toggleQuestion = !this.toggleQuestion;
  }

  onKeyup(): void {
    this.noteService.saveCurrentText(this.textareaValue);
  }

  clearTextarea(): void {
    this.textareaValue = '';
    this.noteService.saveCurrentText(this.textareaValue);
  }

  copyToClipboard(noteTextarea: HTMLTextAreaElement): void {
    if (!this.textareaValue) {
      return;
    }

    noteTextarea.select();
    document.execCommand('copy');
    noteTextarea.setSelectionRange(0, 0);
    this.hideKeyboard(noteTextarea);
  }

  private hideKeyboard(noteTextarea: HTMLTextAreaElement): void {
    noteTextarea.setAttribute('readonly', 'readonly');
    noteTextarea.setAttribute('disabled', 'true');

    setTimeout(() => {
      noteTextarea.blur();
      noteTextarea.removeAttribute('readonly');
      noteTextarea.removeAttribute('disabled');
    }, 100);
  }

  private subscribeToSocket(): void {
    this.subscriptions.push(
      this.socketService.listen('updatedText').subscribe((data) => {
        this.textareaValue = data;
      })
    );
  }

  private subscribeToUser(): void {
    this.subscriptions.push(
      this.userService.getUserObservable().subscribe((user) => {
        if (user) {
          this.textareaValue = user.user.currentText;
          this.noteService.setCurrentText(this.textareaValue);
        }
      })
    );
  }
}
