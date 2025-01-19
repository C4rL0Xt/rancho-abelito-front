import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usernameSubject = new BehaviorSubject<string | null>(null);

  username$: Observable<string | null> = this.usernameSubject.asObservable();

  constructor() { }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
    localStorage.setItem('username', username);
  }

  clearUsername(): void {
    this.usernameSubject.next(null);
  }
}
