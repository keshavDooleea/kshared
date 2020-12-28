import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TextareaType } from 'src/app/classes/textarea';
import { NotesService } from 'src/app/services/notes/notes.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';
import { ResizeService } from 'src/app/services/window-resize/resize.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit, OnDestroy {
  textareaPlaceholder: string;
  textareaValue: string;
  shouldClearFilter: Subject<boolean>;
  private subscriptions: Subscription[] = [];

  @ViewChild('noteTextarea') noteTextarea: ElementRef;

  constructor(
    private noteService: NotesService,
    private socketService: SocketService,
    private userService: UserService,
    private resizeService: ResizeService
  ) {
    this.shouldClearFilter = new Subject<boolean>();
  }

  ngOnInit(): void {
    this.subscribeToWindowSize();
    this.subscribeToSocket();
    this.subscribeToUser();
    this.subscribeToNote();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  saveTextarea(): void {
    if (!this.textareaValue) {
      return;
    }

    this.noteService.addNote(this.textareaValue);
    this.shouldClearFilter.next(true);
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
    this.noteTextarea.nativeElement.placeholder = this.textareaPlaceholder;
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

  private subscribeToWindowSize(): void {
    this.subscriptions.push(
      this.resizeService.getWindowSizeObservable().subscribe((isWindows) => {
        if (isWindows) {
          this.textareaPlaceholder = `Quick note\n\nPress Shift + Enter for quick save!\nTip: Your note stays here even without saving!`;
        } else {
          this.textareaPlaceholder = `Quick note\nTip: Your note stays here even without saving!`;
        }
      })
    );
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

  private subscribeToNote(): void {
    this.subscriptions.push(
      this.noteService.getTextareaSubject().subscribe((type: TextareaType) => {
        if (type.showNewPlaceholder) {
          this.noteTextarea.nativeElement.focus();
          this.noteTextarea.nativeElement.placeholder = `Write your new note!\nYour text will still be saved here when you leave!`;
        }

        this.textareaValue = type.text;
      })
    );
  }
}
