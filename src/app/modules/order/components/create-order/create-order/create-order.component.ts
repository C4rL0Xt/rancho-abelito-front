import { ItemProductMesero } from '../../../../../core/models/ItemProductMesero.model';
import { CarritoServiceService } from '../../../services/Carrito/carrito-service.service';
import { ProductoListMesero } from './../../../../../core/models/productoListMesero.model';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PedidoMeseroService } from '../../../services/pedido-mesero/pedido-mesero.service';
import { PedidoPresencial } from '../../../../../core/models/pedidoPresencial.model';
import { ItemPedidoPresencial } from '../../../../../core/models/ItemPedidoPresencial.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css',
  providers: [DatePipe]
})



export class CreateOrderComponent implements OnInit{

  idPedido: number = 0;
  fecha: string = "";
  mesaId! : number;

  private productos: ProductoListMesero[] = [];

  items: ItemProductMesero[] = [];

  busquedaNombre: string = '';
  productosFiltrados = [...this.productos];

  constructor(
    private carritoService: CarritoServiceService,
    private datePipe: DatePipe,
    private pedidoMeseroService: PedidoMeseroService,
    private route: ActivatedRoute
  ) { 
    const fechaActual = new Date();
    this.fecha = this.datePipe.transform(fechaActual, 'dd MMMM, yyyy, HH:mm a') ?? "";
    this.getIdPedido();
    this.loadProductos();
    console.log('Pedido inicializado:', this.idPedido);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mesaId = Number(params.get('mesaId'));
      console.log('Mesa ID recibido:', this.mesaId);
    });
  }

  asignarPedido() {
    this.idPedido = 8;
    console.log('Pedido asignado:', this.idPedido);
  }

  loadProductos() {
    this.pedidoMeseroService.getProductos().subscribe(productos => {
      this.productos = productos;
      this.productosFiltrados = productos;
    });
  }

  createPedido(pedido: PedidoPresencial) {
    this.pedidoMeseroService.createPedidoPresencial(pedido).subscribe(response => {
      console.log(response);
    });
  }

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
    //Llamar al servicio que agrega el carrito p
    const detalles: ItemPedidoPresencial[] = this.items.map(item => {
      return {
        idProducto: item.producto.idProducto,
        cantidad: item.cantidad,
        descripcion: item.descripcion,
        precio: item.producto.precio
      }
    });

    const pedido: PedidoPresencial = {
      idMesero: "C710",
      idMesa: 1,
      detalles: detalles
    }

    this.createPedido(pedido);
  }

  getIdPedido() {
    this.carritoService.getIdDisponible().subscribe(id => {
      this.idPedido = id;
    });
  }
}
