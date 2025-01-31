import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, SubCategoria, Producto } from '../../../core/models/type.model';
import { environment } from '../../../../environments/enviroments';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) {

  }
  private readonly URL = environment.api_producto;

  getCategoriaById(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.URL}/categorias/${id}`).pipe(
      map((response: Categoria) => {
        console.log('Categoria obtenida:', response);
        return response;
      }),
      catchError((err) => {
        console.error('Error al obtener categoria', err);
        return of();
      }) 
    );
  }

  getSubcategoriasByCategoria(idCategoria: number): Observable<SubCategoria[]> {
    return this.httpClient.get<SubCategoria[]>(`${this.URL}/subcategorias/ByIdCategoria/${idCategoria}`).pipe(
      map((response: SubCategoria[]) => {
        console.log('Subcategorías obtenidas:', response);
        return response;
      }),
      catchError((err) => {
        console.error('Error al obtener subcategorías:', err);
        return of([]);
      })
    );
  }

  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.URL}/categorias/list`).pipe(
      map((response: Categoria[]) => {
        console.log('Categorias obtenidas: ', response);
        return response;
      }),
      catchError((err) => {
        console.error('Error al obtener categorias', err);
        return of([]);
      })
    )
  }

  getProductosBySubcategoria(idSubcategoria: number): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.URL}/productos/for-card/${idSubcategoria}`).pipe(
      map((response: Producto[]) => {
        console.log('Productos por subcategoria obtenidos:', response);
        return response;
      }),
      catchError((err) => {
        console.error('Error al obtener productos:', err);
        return of([]);
      })
    );
  }

}
