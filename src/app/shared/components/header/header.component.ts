import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../modules/auth/services/token-service/token.service';
import { UserService } from '../../services/user-service/user.service';
import { Opcion } from '../../../core/models/type.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  menuOpen = false;
  username!: string;
  opciones:  Opcion[] = [];
  rol: string = 'ROLE_CLIENTE';

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {
    this.rol = localStorage.getItem('rol') ?? 'ROLE_CLIENTE';
    this.determinarOpcionesDeHeader();
  }

  ngOnInit(): void {
    console.log('Iniciando kikiiii')
    this.setUsername();
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  setUsername() {
    var user: string = localStorage.getItem('username') || '';
    this.username = user.split(' ')[0];
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  determinarOpcionesDeHeader(){
    if(this.rol === "ROLE_MESERO"){
      this.opciones = [
        {label: 'Opciones de mesero 1', route: ''},
        {label: 'Opciones de mesero 2', route: ''}
      ];
    }else if(this.rol === "ROLE_CLIENTE"){
      this.opciones = [
        {label: 'La carta', route: '/carta/'},
        {label: 'Menu', route: ''},
        {label: 'Promociones', route: ''}
      ];
    }
  }


}
