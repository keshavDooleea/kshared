import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/auth/login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideComponent } from './components/guide/guide.component';
import { ConfettiIconComponent } from './components/home/confetti-icon/confetti-icon.component';
import { FilesContainerComponent } from './components/home/files-container/files-container.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { NoteListContainerComponent } from './components/home/notes-container/note-list-container/note-list-container.component';
import { NotesContainerComponent } from './components/home/notes-container/notes-container.component';
import { LoginComponent } from './components/login/login.component';
import { SplashComponent } from './components/splash/splash.component';
import { StarsComponent } from './components/stars/stars.component';
import { SafeUrlPipe } from './custom-pipe/safe-url.pipe';
import { FileBindingDirective } from './directives/file-binding.directive';
import { FileDropDirective } from './directives/file-drop.directive';
import { PlaystoreIconComponent } from './components/home/playstore-icon/playstore-icon.component';
import { AppstoreIconComponent } from './components/home/appstore-icon/appstore-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesContainerComponent,
    FilesContainerComponent,
    NavbarComponent,
    NoteListContainerComponent,
    LoginComponent,
    HomeComponent,
    SafeUrlPipe,
    StarsComponent,
    ConfettiIconComponent,
    GuideComponent,
    SplashComponent,
    FileBindingDirective,
    FileDropDirective,
    PlaystoreIconComponent,
    AppstoreIconComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LoginService, useClass: LoginService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
