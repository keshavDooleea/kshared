import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: User;

  constructor() {}

  setUser(newUser: User): void {
    this.currentUser = newUser;
  }

  getUser(): User {
    return this.currentUser;
  }

  getToken(): string {
    return this.currentUser.user.token;
  }
}
