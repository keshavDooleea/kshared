import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

const STORAGE_KEY = 'kshared-user';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private userService: UserService) {}

  saveToken(): void {
    const token: string = this.userService.getToken();
    localStorage.setItem(STORAGE_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(STORAGE_KEY);
  }

  clearToken(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
