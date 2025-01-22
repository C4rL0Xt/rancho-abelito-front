import { CarritoDetail } from '../../../../core/models/carritoDetail.model';
import { CarritoService } from './../../services/carritoService/carrito.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-details-panel',
  templateUrl: './product-details-panel.component.html',
  styleUrl: './product-details-panel.component.css'
})
export class ProductDetailsPanelComponent {
  @Input() producto: any;
  @Output() cerrar = new EventEmitter<void>();

  private products: CarritoDetail[] = [];
  cantidad: number = 1;
  adicionales: string = '';

  constructor(private carritoService: CarritoService){}

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

    const detalles: CarritoDetail = {
      producto: this.producto,
      cantidad: this.cantidad,
      adicionales: this.adicionales,
      total: this.producto.precio*this.cantidad
    };

    this.carritoService.agregarProducto(detalles);
    this.closePanel();
    console.log('producto agregado al carro: ',detalles);
    this.products = this.carritoService.obtenerProductos();
    console.log('peoductos en el carro: ',this.products);
  }
}
