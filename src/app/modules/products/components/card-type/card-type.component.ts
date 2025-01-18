import { Component, Input } from '@angular/core';
import { Categoria } from '../../../../core/models/type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrl: './card-type.component.css'
})
export class CardTypeComponent {

  @Input() categoria!: Categoria;

  constructor(private router: Router) { }

  goToCategoria(idCategoria: number): void {
    console.log('Navegando a categoria con id:', idCategoria);
    this.router.navigate(['/carta/categoria', idCategoria]);
  }
}
