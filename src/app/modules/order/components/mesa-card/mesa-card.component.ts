import { Component, Input } from '@angular/core';
import { Mesa } from '../../../../core/models/mesa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesa-card',
  templateUrl: './mesa-card.component.html',
  styleUrl: './mesa-card.component.css',
})
export class MesaCardComponent {
  estado: string = 'disponible';
  state: boolean = false;

  @Input() mesa: Mesa | undefined;

  changeState() {
    if (this.mesa) {
      this.mesa.estado = !this.mesa.estado;
    }
  }

  constructor(private router: Router) {}

  navigateToCreate() {
    this.router.navigate(['/order/create']).catch((err) => console.error(err));
  }
}
