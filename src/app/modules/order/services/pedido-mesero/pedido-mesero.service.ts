import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductoListMesero } from '../../../../core/models/productoListMesero.model';
import { PedidoPresencial } from '../../../../core/models/pedidoPresencial.model';
import { ResponsePedidoPresencial } from '../../../../core/models/responsePedidoPresencial.model';

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


  
}
