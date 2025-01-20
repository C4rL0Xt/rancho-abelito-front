import { Component, Input } from '@angular/core';
import { Producto } from '../../../../core/models/type.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() producto!: Producto;

  panelAbierto = false;
  productoSeleccionado: any = null;

  abrirPanel(producto: any) {
    this.productoSeleccionado = producto;
    this.panelAbierto = true;
  }

  cerrarPanel() {
    this.panelAbierto = false;
    this.productoSeleccionado = null;
  }

}
