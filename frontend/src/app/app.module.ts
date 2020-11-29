import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { FilesContainerComponent } from './components/files-container/files-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteListContainerComponent } from './components/notes-container/note-list-container/note-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesContainerComponent,
    FilesContainerComponent,
    NavbarComponent,
    NoteListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
