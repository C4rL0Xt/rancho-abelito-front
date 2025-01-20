import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../modules/auth/services/token-service/token.service';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  menuOpen = false;
  username!: string;

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {

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
}
