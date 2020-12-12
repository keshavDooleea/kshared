export interface CurrentUser {
  username: string;
  token: string;
  id: string;
  dateCreated: string;
  currentText: string;
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
