import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

const STORAGE_KEY = 'kshared-token';
const OLD_KEY = 'kshared-user';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private userService: UserService, private router: Router) {}

  saveToken(): void {
    const token: string = this.userService.getToken();
    localStorage.setItem(STORAGE_KEY, token);
  }

  getToken(): string | null {
    this.removeOldToken();
    return localStorage.getItem(STORAGE_KEY);
  }

  clearToken(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.router.navigateByUrl('/login');
  }

  private removeOldToken(): void {
    if (localStorage.getItem(OLD_KEY) !== null) {
      localStorage.removeItem(OLD_KEY);
    }
  }
}
