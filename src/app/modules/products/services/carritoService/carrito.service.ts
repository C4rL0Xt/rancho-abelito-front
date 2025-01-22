import { Injectable } from '@angular/core';
import { CarritoDetail } from '../../../../core/models/carritoDetail.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: CarritoDetail[] = [];

  obtenerProductos() {
    return this.productos;
  }

  agregarProducto(producto: CarritoDetail) {
    const existente = this.productos.find(p => p.producto.idProducto == producto.producto.idProducto);
    if (existente) {
      console.log('El producto ya existe');
      existente.cantidad += producto.cantidad;
    } else {
      console.log('El producto no existe')
      this.productos.push({ ...producto });
    }
  }

  eliminarProducto(producto: any) {
    this.productos = this.productos.filter(p => p.producto.idProducto !== producto.producto.idProducto);
  
  }

  limpiarCarrito() {
    this.productos = [];
  }

  calcularSubtotal(): number {
    return this.productos.reduce((subtotal, item) => {
      return subtotal + (item.producto.precio * item.cantidad);
    }, 0);
  }

  actualizarCantidad(producto: any, nuevaCantidad: number) {
    const existente = this.productos.find(p => p.producto.idProducto === producto.producto.idProducto);
    if (existente && nuevaCantidad > 0) {
      existente.cantidad = nuevaCantidad;
      existente.total = existente.producto.precio * nuevaCantidad;
    } else if (nuevaCantidad === 0) {
      this.eliminarProducto(producto);
    }
  }
}
