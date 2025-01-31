import { Component } from '@angular/core';
import { UserService } from '../../../../shared/services/user-service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  roleUser: string = '';
  constructor(

  ) { 
    this.roleUser = localStorage.getItem('rol') || '';

  }




}
