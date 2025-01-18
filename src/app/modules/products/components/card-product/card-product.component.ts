import { Component, Input } from '@angular/core';
import { Producto } from '../../../../core/models/type.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() producto!: Producto;

}
