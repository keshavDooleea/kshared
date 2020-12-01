import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesContainerComponent } from './components/home/files-container/files-container.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { NoteListContainerComponent } from './components/home/notes-container/note-list-container/note-list-container.component';
import { NotesContainerComponent } from './components/home/notes-container/notes-container.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesContainerComponent,
    FilesContainerComponent,
    NavbarComponent,
    NoteListContainerComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
