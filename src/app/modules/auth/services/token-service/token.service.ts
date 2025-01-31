import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private rol!: string;

  constructor() { 
    
  }

  private extractRolFromToken(): void {
    const accessToken = this.obtenerToken();
    if (accessToken) {
      const token = accessToken;
      const payload = token.split('.')[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);
      this.rol = values.role || '';
      this.setRol(this.rol);
    } else {
      this.rol = ''
    }


  }

  obtenerRol(): string {
    console.log('Rol obtenido en el service', this.rol);
    return this.rol;
  }

  setRol(rol: string){
    localStorage.setItem('rol', rol);
  }

  almacenarToken(token: string) {
    localStorage.setItem('token', token);
    this.extractRolFromToken();
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  eliminarToken() {
    localStorage.removeItem('token');
  }
}
