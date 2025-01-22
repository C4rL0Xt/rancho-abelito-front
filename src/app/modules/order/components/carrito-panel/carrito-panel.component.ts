import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarritoService } from '../../../products/services/carritoService/carrito.service';

@Component({
  selector: 'app-carrito-panel',
  templateUrl: './carrito-panel.component.html',
  styleUrl: './carrito-panel.component.css'
})
export class CarritoPanelComponent implements OnInit{
  productos: any[] = [];
  @Output() cerrar = new EventEmitter<void>();

  constructor(private carritoService: CarritoService) {
    this.productos = this.carritoService.obtenerProductos();
  }

  closePanel() {
    this.cerrar.emit();
  }

  ngOnInit(): void {
    this.productos= this.carritoService.obtenerProductos();
    console.log('Products del carrito p: ', this.productos);
  }

  eliminarProducto(producto: any) {
    this.carritoService.eliminarProducto(producto);
    this.actualizarProductos();
  }

  aumentarCantidad(producto: any) {
    this.carritoService.actualizarCantidad(producto, producto.cantidad + 1);
    this.actualizarProductos();
  }

  disminuirCantidad(producto: any) {
    if (producto.cantidad > 1) {
      this.carritoService.actualizarCantidad(producto, producto.cantidad - 1);
      this.actualizarProductos();
    } else {
      this.eliminarProducto(producto);
    }
  }

  limpiarCarrito() {
    this.carritoService.limpiarCarrito();
    this.actualizarProductos();
  }

  calcularSubtotal(): number {
    return this.carritoService.calcularSubtotal();
  }

  actualizarProductos() {
    this.productos = this.carritoService.obtenerProductos();
  }
}
