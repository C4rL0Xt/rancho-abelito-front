import { Injectable } from '@angular/core';
import { CarritoDetail } from '../../../../core/models/carritoDetail.model';
import { environment } from '../../../../../environments/enviroments';
import { catchError, map, Observable, of } from 'rxjs';
import { Carrito } from '../../../../core/models/carrito.model';
import { HttpClient } from '@angular/common/http';
import { CarritoAdd } from '../../../../core/models/carritoAdd.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  private readonly API_URL = environment.api_carrito;
  private readonly URL_PEDIDO = environment.api_pedido;

  private productos: CarritoDetail[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }


  metodo():  CarritoAdd[] {
    var sendDetails: CarritoAdd[] = [];
    for(var i=0; i<this.productos.length; i++) {
      var details: CarritoAdd = {
        idProducto: this.productos[i].producto.idProducto,
        cantidad: this.productos[i].cantidad,
        descripcion: this.productos[i].producto.descripcion,
        idCarrito: Number(localStorage.getItem('idCarrito')),
        idCliente: localStorage.getItem('idCliente') ?? '',
        precio: this.productos[i].producto.precio
      }
      sendDetails.push(details);
    }
    return sendDetails;
  }


  checkCarrito(idCliente: string): Observable<Carrito>{
    return this.httpClient.post<Carrito>(`${this.API_URL}/check/${idCliente}`, null).pipe(
      map((response: Carrito) => {
        localStorage.setItem('idCarrito', response.idCarrito.toString());
        console.log(response.mensaje);
        console.log(response.status);
        return response;
      }),
      catchError((err) => {
        console.error('Error obteniendo id Carrito', err);
        return of();
      })
    );
  }

  addListCarrito(): Observable<string>{
    var carrito: CarritoAdd[] = this.metodo();
    return this.httpClient.post<string>(`${this.API_URL}/add`, carrito,  { responseType: 'text' as 'json' }).pipe(
      map((response: string) => {
        console.log(response);
        return response;
      }),
      catchError((err) => {
        console.error('Error agregando la lista carrito', err);
        return of();
      })
    );
  }

  getDetalles(idCliente: string, idCarrito: number): Observable<CarritoDetail[]>{
    return this.httpClient.get<CarritoDetail[]>(`${this.API_URL}/get/${idCliente}/${idCarrito}`).pipe(
      map((response: CarritoDetail[]) => {
        console.log('Pro p: ', response);
        if(response.length > 0) {
          console.log("PRODUCTO QUE SE AGREGARON - get", response);
          this.productos = response;
          return response;
        } else {
          this.productos = [];
          return [];
        }
        
      }),
      catchError((err) => {
        console.error('Error obteniendo los detalles :o',err);
        return of([]);
      })
    )
  }

  obtenerProductos() {
    console.log("PRODUCTO QUE SE AGREGARON -service", this.productos);
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


  getIdDisponible(): Observable<number> {
    return this.httpClient.get<number>(`${this.URL_PEDIDO}/id`).pipe(
      map((response: number) => {
        console.log('ID DISPONIBLE: ', response);
        return response;
      }), 
      catchError((err) => {
        console.error('Error obteniendo id disponible', err);
        return of();
      })
    );
  }
}
