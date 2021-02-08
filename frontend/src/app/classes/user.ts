import { CustomFiles } from './files';
import { Note } from './Note';

export interface CurrentUser {
  username: string;
  token: string;
  id: string;
  dateAccCreated: string;
  currentText?: string;
  noteList?: Note[];
  stars?: number;
  files?: CustomFiles[];
}

export interface DbUsers {
  username: string;
  _id: string;
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
