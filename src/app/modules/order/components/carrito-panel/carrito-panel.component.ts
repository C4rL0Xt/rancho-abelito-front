import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarritoServiceService } from '../../services/Carrito/carrito-service.service';
import { CarritoDetail } from '../../../../core/models/carritoDetail.model';


@Component({
  selector: 'app-carrito-panel',
  templateUrl: './carrito-panel.component.html',
  styleUrl: './carrito-panel.component.css'
})
export class CarritoPanelComponent implements OnInit{
  productos: CarritoDetail[] = [];
  @Output() cerrar = new EventEmitter<void>();

  constructor(private carritoService: CarritoServiceService) {
    this.loadCarrito();
    console.log('ABRIENDO PANEL desde consctrctor');
    //this.productos = this.carritoService.obtenerProductos();
  }

  loadCarrito() {
    var idCarrito = Number(localStorage.getItem('idCarrito'));
    var idCliente = localStorage.getItem('idCliente') || '';

 
    this.carritoService.getDetalles(idCliente, idCarrito).subscribe(
        (response) => {
          console.log("Resultado de lista del carrito cliente" ,response);
          this.productos = response;
        }
    )
    
  }

  closePanel() {
    this.cerrar.emit();
    this.carritoService.addListCarrito().subscribe(
      (response) => {
        console.log('Respuesta del servidor', response);
      }
    );
  }

  ngOnInit(): void {
    this.loadCarrito();
    //this.productos= this.carritoService.obtenerProductos();
    console.log('ABRIENDO PANEL desde ngonit');
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
