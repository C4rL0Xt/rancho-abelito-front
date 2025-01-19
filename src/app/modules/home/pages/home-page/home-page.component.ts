import { Component } from '@angular/core';
import { UserService } from '../../../../shared/services/user-service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  username: string = '';

  constructor(
    private userService: UserService
  ) { 

    this.username = localStorage.getItem('username') || '';
  }




}
