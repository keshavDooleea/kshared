import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DbUsers, User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dbUsers: DbUsers[];
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

  getAllUsers(): DbUsers[] {
    return this.dbUsers;
  }

  getUserObservable(): Observable<User> {
    return this.behaviorSubject.asObservable();
  }

  getToken(): string {
    return this.currentUser.user.token;
  }

  setCurrentText(newText: string): void {
    this.currentUser.user.currentText = newText;
  }

  setDbUsers(users: DbUsers[]): void {
    // remove own username
    users.forEach((user, index) => {
      if (
        user.username.toLowerCase() ===
        this.currentUser.user.username.toLowerCase()
      ) {
        users.splice(index, 1);
      }
    });

    this.dbUsers = users;
  }
}
