import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: User;
  private behaviorSubject: BehaviorSubject<User>;

  constructor() {
    this.behaviorSubject = new BehaviorSubject<User>(this.currentUser);
  }

  setUser(newUser: User): void {
    this.currentUser = newUser;
    this.behaviorSubject.next(this.currentUser);
  }

  getUser(): User {
    return this.currentUser;
  }

  getUserObservable(): Observable<User> {
    return this.behaviorSubject.asObservable();
  }

  getToken(): string {
    return this.currentUser.user.token;
  }

  setCurrentText(newText: string): void {
    this.currentUser.user.currentText = newText;
    this.behaviorSubject.next(this.currentUser);
  }
}
