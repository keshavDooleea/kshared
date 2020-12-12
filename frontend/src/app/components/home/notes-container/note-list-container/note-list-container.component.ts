import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private socketSubscription: Subscription;
  private userSubscription: Subscription;
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
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  clearFilter(): void {
    this.filterText = '';
    this.updateFilteredList();
  }

  onFilterChange(): void {
    this.updateFilteredList();
  }

  onNoteClicked(note: Note): void {
    console.log(note);
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
  }

  private updateFilteredList(): void {
    this.noteList.forEach((note) => {
      note.canShow = note.text.includes(this.filterText);
    });
  }

  private subscribeToSocket(): void {
    this.socketSubscription = this.socketService
      .listen('getNotes')
      .subscribe((data: Note[]) => {
        this.noteList = data;
        this.noteService.setNotes(this.noteList);
      });
  }

  private subscribeToUser(): void {
    this.userSubscription = this.userService
      .getUserObservable()
      .subscribe((user) => {
        if (user) {
          this.noteList = user.user.noteList;
          this.noteService.setNotes(this.noteList);
        }
      });
  }
}
