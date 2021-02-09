import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Note } from 'src/app/classes/Note';
import { DbUsers } from 'src/app/classes/user';
import { NotesService } from 'src/app/services/notes/notes.service';
import { ShareService } from 'src/app/services/share/share.service';
import { UserService } from 'src/app/services/user/user.service';
import { SocketService } from 'src/app/services/web-socket/socket.service';

@Component({
  selector: 'app-note-list-container',
  templateUrl: './note-list-container.component.html',
  styleUrls: ['./note-list-container.component.scss'],
})
export class NoteListContainerComponent implements OnInit, OnDestroy {
  @Input() shouldClearFilter: Subject<boolean>;

  private subscriptions: Subscription[] = [];
  noteList: Note[];
  filterText: string;
  shareUserText: string;
  isNoteOpened: boolean;
  showShareModal: boolean;
  hasFoundUser: boolean;
  openTextAreaValue: string;
  currentNote: Note;
  readonly textareaPlaceholder =
    'Write your note\nTip: Your note is updated and saved automatically as you write';

  constructor(
    private noteService: NotesService,
    private socketService: SocketService,
    private userService: UserService,
    private elementRef: ElementRef,
    private shareService: ShareService
  ) {}

  ngOnInit(): void {
    this.subscribeToSocket();
    this.subscribeToUser();
    this.subscribeToParentFilter();
    this.getAddedShareUsers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getAddedShareUsers(): DbUsers[] {
    return this.shareService.sharedUsers;
  }

  clearFilter(): void {
    this.filterText = '';
    this.updateFilteredList();
  }

  onFilterChange(): void {
    this.updateFilteredList();
  }

  isFilterEmpty(): boolean {
    return !this.noteList.some((note) => note.canShow);
  }

  addNewNote(): void {
    this.isNoteOpened = true;
    this.openTextAreaValue = '';
    this.currentNote = null;
    this.shouldClearFilter.next(true);
    this.noteService.addNewNote(this.openTextAreaValue);
  }

  onNoteClicked(note: Note): void {
    this.isNoteOpened = true;
    this.currentNote = note;
    this.shouldClearFilter.next(true);
    this.openTextAreaValue = note.text;

    setTimeout(() => this.focusTextarea(), 50);
  }

  closeOpenNote(): void {
    this.noteService.cleanEmptyNotes();
    this.isNoteOpened = false;
    this.currentNote = {} as Note;
  }

  onKeyup(): void {
    if (this.currentNote) {
      this.currentNote.text = this.openTextAreaValue;
      this.noteService.updateCurrentNote(
        this.currentNote,
        this.openTextAreaValue
      );
    }
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
  }

  copyToClipboard(noteTextarea: HTMLTextAreaElement): void {
    if (!this.openTextAreaValue) {
      return;
    }

    noteTextarea.select();
    document.execCommand('copy');
    noteTextarea.setSelectionRange(0, 0);
    this.hideKeyboard(noteTextarea);
  }

  openShareModal(): void {
    this.showShareModal = true;

    if (!this.userService.getAllUsers()) {
      this.socketService.emit('getAllUsers', '');
    }
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

  getSharedUsersLength(): number {
    return this.shareService.sharedUsers.length;
  }

  checkIfShareUserExists(): boolean {
    return this.shareService.sharedUsers.some(
      (user) => user.username.toLowerCase() === this.shareUserText
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

  sendNoteNotification(): void {
    this.shareService.shareNote(this.currentNote);
  }

  cancelShare(): void {
    this.hasFoundUser = false;
    this.showShareModal = false;
    this.shareUserText = '';
    this.shareService.sharedUsers = [];
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

  private focusTextarea(): void {
    this.elementRef.nativeElement.querySelector('.open-note-textarea').focus();
  }

  private updateFilteredList(): void {
    this.noteList.forEach((note) => {
      note.canShow = note.text
        .toLowerCase()
        .includes(this.filterText.toLowerCase());
    });
  }

  private subscribeToSocket(): void {
    this.subscriptions.push(
      this.socketService.listen('getNotes').subscribe((data: Note[]) => {
        this.noteList = data;
        this.noteService.setNotes(this.noteList);
      })
    );

    this.subscriptions.push(
      this.socketService.listen('currentNote').subscribe((data: Note) => {
        this.currentNote = data;
        this.focusTextarea();
      })
    );

    this.subscriptions.push(
      this.socketService.listen('allUsers').subscribe((users: DbUsers[]) => {
        this.userService.setDbUsers(users);
      })
    );
  }

  private subscribeToUser(): void {
    this.subscriptions.push(
      this.userService.getUserObservable().subscribe((user) => {
        if (user) {
          this.noteList = user.user.noteList ?? [];
          this.noteService.setNotes(this.noteList);
        }
      })
    );
  }

  private subscribeToParentFilter(): void {
    this.subscriptions.push(
      this.shouldClearFilter.subscribe((shouldClear) => {
        if (shouldClear) {
          this.clearFilter();
        }
      })
    );
  }
}
