import { Note } from './Note';

export interface CurrentUser {
  username: string;
  token: string;
  id: string;
  dateAccCreated: string;
  currentText?: string;
  noteList?: Note[];
  stars?: number;
}

export class User {
  private currentUser: CurrentUser;

  constructor(newUser: CurrentUser) {
    this.currentUser = newUser;
  }

  get user(): CurrentUser {
    return this.currentUser;
  }
}
