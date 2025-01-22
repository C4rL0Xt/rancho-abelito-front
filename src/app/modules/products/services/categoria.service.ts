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

 





  private categorias: Categoria[] = [
    {
      idCategoria: 1,
      nombre: 'Entradas',
      imageUrl: 'https://s1.elespanol.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009517_1706x1280.jpg'
    },
    {
      idCategoria: 2,
      nombre: 'Platos de Fondo',
      imageUrl: 'https://www.paulinacocina.net/wp-content/uploads/2020/01/tacos-meat-food-mexican-lunch-dinner.jpg'
    }, {
      idCategoria: 3,
      nombre: 'Bebidas',
      imageUrl: 'https://s1.elespanol.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009517_1706x1280.jpg'
    },
    {
      idCategoria: 4,
      nombre: 'Postres',
      imageUrl: 'https://www.paulinacocina.net/wp-content/uploads/2020/01/tacos-meat-food-mexican-lunch-dinner.jpg'
    },
    {
      idCategoria: 5,
      nombre: 'Sopas y Caldos',
      imageUrl: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=1224%3Aauto'
    }, {
      idCategoria: 6,
      nombre: 'Adicionales',
      imageUrl: 'https://www.bbva.com/wp-content/uploads/2023/04/cocina-de-aprovechamiento-1024x629.jpg'
    }
  ];

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
  

 /*getProductosBySubcategoria(idSubcategoria: number): Producto[] {
    return this.productos.filter(producto => producto.idSubcategoria === idSubcategoria);
  }*/

}
