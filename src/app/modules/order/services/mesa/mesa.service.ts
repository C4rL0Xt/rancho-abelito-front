import { Injectable } from '@angular/core';
import { Mesa } from '../../../../core/models/mesa.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/enviroments';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  mesas: Mesa[] = [
    { mesaId: 1, capacidad: 4, estado: true },
    { mesaId: 2, capacidad: 4, estado: true },
    { mesaId: 3, capacidad: 4, estado: true },
    { mesaId: 4, capacidad: 4, estado: true },
    { mesaId: 5, capacidad: 4, estado: true },
    { mesaId: 6, capacidad: 4, estado: true },
    { mesaId: 7, capacidad: 4, estado: true },
    { mesaId: 8, capacidad: 4, estado: true },
  ]

  private readonly URL = environment.api_mesas;

  constructor(
    private http: HttpClient
  ) { }


  getMessas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${this.URL}/1`).pipe(
      map((response: Mesa[]) => {
        return response;
      }),
      catchError((err) => {
        console.error('Error obteniendo las mesas para este local',err);
        return of([]);
      })
    );

  } 
}
