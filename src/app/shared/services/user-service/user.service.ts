import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usernameSubject = new BehaviorSubject<string | null>(null);
  username$: Observable<string | null> = this.usernameSubject.asObservable();

  private idClienteSubject = new BehaviorSubject<string | null>(null);
  idCliente$: Observable<string | null> = this.idClienteSubject.asObservable();

  constructor() { }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
    localStorage.setItem('username', username);
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }

  setIdCliente(idCliente: string): void {
    this.idClienteSubject.next(idCliente);
    localStorage.setItem('idCliente', idCliente);
  }

  getIdCliente(): string {
    return localStorage.getItem('idCliente') || '';
  }

  clearUsername(): void {
    this.usernameSubject.next(null);
    
  }
}
