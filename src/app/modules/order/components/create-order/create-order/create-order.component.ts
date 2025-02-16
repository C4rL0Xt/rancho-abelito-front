import { ItemProductMesero } from '../../../../../core/models/ItemProductMesero.model';
import { CarritoServiceService } from '../../../services/Carrito/carrito-service.service';
import { ProductoListMesero } from './../../../../../core/models/productoListMesero.model';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PedidoMeseroService } from '../../../services/pedido-mesero/pedido-mesero.service';
import { PedidoPresencial } from '../../../../../core/models/pedidoPresencial.model';
import { ItemPedidoPresencial } from '../../../../../core/models/ItemPedidoPresencial.model';
import { ActivatedRoute } from '@angular/router';
import { ResponsePedido } from '../../../../../core/models/responsePedido.model';
import { CarritoDetail } from '../../../../../core/models/carritoDetail.model';
import { Producto } from '../../../../../core/models/type.model';
import { CarritoAdd } from '../../../../../core/models/carritoAdd.model';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css',
  providers: [DatePipe]
})



export class CreateOrderComponent implements OnInit{

  idPedido: number = 0;
  idCarrito: number = 0;
  fecha: string = "";
  mesaId! : number;

  private productos: ProductoListMesero[] = [];

  items: CarritoDetail[] = [];
  pedidoPresencial: ResponsePedido | undefined;
 
  busquedaNombre: string = '';
  productosFiltrados = [...this.productos];

  constructor(
    private carritoService: CarritoServiceService,
    private datePipe: DatePipe,
    private pedidoMeseroService: PedidoMeseroService,
    private route: ActivatedRoute
  ) { 
    this.route.paramMap.subscribe(params => {
      this.mesaId = Number(params.get('mesaId'));
      console.log('Mesa ID recibido:', this.mesaId);
    });
    
    const fechaActual = new Date();
    this.fecha = this.datePipe.transform(fechaActual, 'dd MMMM, yyyy, HH:mm a') ?? "";
    this.getIdPedido();
    this.loadProductos();
    console.log('Pedido inicializado:', this.idPedido);
    
    this.loadDetallesPorMesa();
  }

  loadDetallesPorMesa(){
    this.pedidoMeseroService.getPedidoPresencial(this.mesaId).subscribe(
      (response) => {
        console.log('respuesta de detalles por mesa: ',response);
        this.pedidoPresencial = response;
        this.items = this.pedidoPresencial.detalles;
        this.idPedido = this.pedidoPresencial.idPedido;
        this.idCarrito = this.pedidoPresencial.idCarrito;
        console.log('Detalles de pedido:', this.items);
      }
    )
  }

  actualizarPedido() {
    console.log('Actualizando pedido:', this.items);

    var detalles: CarritoAdd[] = this.items.map(item => {
      return {
        idProducto: item.producto.idProducto,
        cantidad: item.cantidad,
        descripcion: item.adicionales,
        precio: item.producto.precio,
        idCarrito: this.idCarrito
      }
    })

    this.pedidoMeseroService.addListCarrito(detalles).subscribe(
      (response) => {
        console.log('Respuesta del servidor', response);
      }
    );
  }

  ngOnInit() {
  
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

    var product: Producto = {
      idProducto: producto.idProducto,
      nombre: producto.nombre,
      precio: producto.precio,
      imagenUrl: producto.image
    }

    var item: CarritoDetail = {
      producto: product,
      cantidad: 1,
      adicionales: "",
      total: 0
    }

    this.items.push(item);
  }

  changeQuantity(change: number, item: CarritoDetail) {
    item.cantidad += change;
    
    if (item.cantidad < 1) {
      item.cantidad = 1;
    }
    this.reducirStock(item.producto.idProducto,change);
  }

  reducirStock(idProducto: number,cantidad: number){
    var producto: ProductoListMesero | undefined = this.productos.find(product => product.idProducto == idProducto);
    producto!.stock -= cantidad ?? 0;
    
  }

  calcularSubtotal() {
    for (let item of this.items) {
      item.total = item.cantidad * item.producto.precio;
    }
  }

  eliminarItem(item: CarritoDetail) {
    this.items = this.items.filter(existingItem => existingItem.producto.idProducto !== item.producto.idProducto);
  }

  guardarCarritoDelMesero() {
    this.calcularSubtotal();
    //Llamar al servicio que agrega el carrito p
    const detalles: ItemPedidoPresencial[] = this.items.map(item => {
      return {
        idProducto: item.producto.idProducto,
        cantidad: item.cantidad,
        descripcion: item.adicionales,
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
