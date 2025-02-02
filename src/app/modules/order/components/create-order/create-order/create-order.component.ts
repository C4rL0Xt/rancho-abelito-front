import { ItemProductMesero } from '../../../../../core/models/ItemProductMesero.model';
import { ProductoListMesero } from './../../../../../core/models/productoListMesero.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})



export class CreateOrderComponent {
  private productos: ProductoListMesero[] = [
    {
      idProducto: 1,
      image: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/arroz_mariscos.jpg?raw=true",
      nombre: "Arroz con pollo",
      stock: 5,
      precio: 10
    }, {
      idProducto: 2,
      image: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/arroz_mariscos.jpg?raw=true",
      nombre: "Aji de gallina",
      stock: 3,
      precio: 12
    }, {
      idProducto: 3,
      image: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/arroz_mariscos.jpg?raw=true",
      nombre: "Escabeche de pescado",
      stock: 4,
      precio: 15
    }, {
      idProducto: 4,
      image: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/arroz_mariscos.jpg?raw=true",
      nombre: "Ceviche",
      stock: 5,
      precio: 16
    }, {
      idProducto: 5,
      image: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/arroz_mariscos.jpg?raw=true",
      nombre: "Sopa de caracol",
      stock: 6,
      precio: 11
    }
  ]

  items: ItemProductMesero[] = [
    {
      producto: this.productos[0],
      idEstado: 1,
      cantidad: 3,
      descripcion: "2 con presita parte pierna y 1 parte pecho xd",
      subtotal: 23.2
    }, {
      producto: this.productos[1],
      idEstado: 1,
      cantidad: 2,
      descripcion: "2 con presita parte pierna y 1 parte pecho xd",
      subtotal: 23.2
    }
  ];

  busquedaNombre: string = '';
  productosFiltrados = [...this.productos];

  aplicarFiltroBusqueda() {
    const filtro = this.busquedaNombre.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filtro)
    );
  }

  agregarProductoAItems(producto: ProductoListMesero) {
    const productoExistente = this.items.some(item => item.producto.idProducto === producto.idProducto);
    if (productoExistente) {
      console.log("Este producto ya ha sido agregado.");
      return;
    }
    var item: ItemProductMesero = {
      producto: producto,
      idEstado: 1,
      cantidad: 1,
      descripcion: "",
      subtotal: 0
    }
    this.items.push(item);
  }

  changeQuantity(change: number, item: ItemProductMesero) {
    item.cantidad += change;
    if (item.cantidad < 1) item.cantidad = 1;
    console.log(this.items);

  }

  calcularSubtotal() {
    for (let item of this.items) {
      item.subtotal = item.cantidad * item.producto.precio;
    }
  }

  eliminarItem(item: ItemProductMesero) {
    this.items = this.items.filter(existingItem => existingItem.producto.idProducto !== item.producto.idProducto);
  }

  guardarCarritoDelMesero() {
    this.calcularSubtotal();
    console.log(this.items);
    //Llamar al servicio que agrega el carrito p
  }


}
