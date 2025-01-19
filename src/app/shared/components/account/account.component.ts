import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnChanges {

  username: string | null = null;
  
  constructor(private router: Router,
    public userService: UserService
  ){
  }

  ngOnChanges(): void {
    this.userService.username$.subscribe(
      (username) => {
        this.username = username;
      }
    );
  }

  openWindow():void {
    //window.alert('!!!!FACTO IMPORTANTE:  MELANI ES UNA BEBITA TOTALMENTE DESCARADA Y LE ENCANTA QUE SU PAPI LE DE BESITO');
    this.router.navigate(['/auth']);
  }

  showDialog: boolean = false;

  openDialog(): void {
    this.showDialog = true; // Mostrar el diálogo
  }

  closeDialog(): void {
    this.showDialog = false; // Ocultar el diálogo
  }
}
