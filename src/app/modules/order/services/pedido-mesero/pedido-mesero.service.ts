import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductoListMesero } from '../../../../core/models/productoListMesero.model';
import { PedidoPresencial } from '../../../../core/models/pedidoPresencial.model';
import { ResponsePedidoPresencial } from '../../../../core/models/responsePedidoPresencial.model';
import { ResponsePedido } from '../../../../core/models/responsePedido.model';
import { CarritoDetail } from '../../../../core/models/carritoDetail.model';
import { CarritoAdd } from '../../../../core/models/carritoAdd.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoMeseroService {

  private readonly API_URL = environment.api_producto_mesero;
  private readonly API_URL_CARRITO = environment.api_carrito;

  constructor(
    private http: HttpClient
  ) { }

  getProductos(): Observable<ProductoListMesero[]> {
    return this.http.get<ProductoListMesero[]>(`${this.API_URL}/for-list`).pipe(
      map((response: ProductoListMesero[]) => {
        console.log(response);
        return response;
      }),
      catchError((err) => {
        console.error('Error obteniendo productos', err);
        return of();
      })
    );
  }

  createPedidoPresencial(pedido: PedidoPresencial): Observable<ResponsePedidoPresencial> {
    return this.http.post(`${this.API_URL_CARRITO}/presencial/create`, pedido).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      }),
      catchError((err) => {
        console.error('Error creando pedido', err);
        return of();
      })
    );
  }

  getPedidoPresencial(idMesa: number): Observable<ResponsePedido> {
    return this.http.get(`${this.API_URL_CARRITO}/presencial/get/${idMesa}`).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      }),
      catchError((err) => {
        console.error('Error obteniendo pedido', err);
        return of();
      })
    );
  }

  addListCarrito(items: CarritoAdd[]): Observable<string>{
     
      return this.http.post<string>(`${this.API_URL_CARRITO}/add`, items,  { responseType: 'text' as 'json' }).pipe(
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
  
  
}
