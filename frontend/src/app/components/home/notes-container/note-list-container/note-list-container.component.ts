import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Note } from 'src/app/classes/Note';
import { NotesService } from 'src/app/services/notes/notes.service';
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

  constructor(
    private noteService: NotesService,
    private socketService: SocketService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscribeToSocket();
    this.subscribeToUser();
    this.subscribeToParentFilter();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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
    this.noteService.addNewNote();
  }

  onNoteClicked(note: Note): void {
    this.noteService.updateCurrentNote(note.text);
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
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
