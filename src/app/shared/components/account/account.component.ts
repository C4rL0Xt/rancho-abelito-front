import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  constructor(private router: Router){
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
