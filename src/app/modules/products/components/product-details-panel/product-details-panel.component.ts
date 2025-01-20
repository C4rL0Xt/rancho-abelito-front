import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-details-panel',
  templateUrl: './product-details-panel.component.html',
  styleUrl: './product-details-panel.component.css'
})
export class ProductDetailsPanelComponent {
  @Input() producto: any;
  @Output() cerrar = new EventEmitter<void>();

  cantidad: number = 1;
  adicionales: string = '';

  closePanel() {
    this.cerrar.emit();
  }

  incrementarCantidad() {
    this.cantidad++;
  }

  decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  agregarCarrito() {
    const detalles = {
      producto: this.producto,
      cantidad: this.cantidad,
      adicionales: this.adicionales,
    };
    console.log('Añadiendo al carrito:', detalles);
    this.closePanel();
  }
}
