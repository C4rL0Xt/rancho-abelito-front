import { Injectable } from '@angular/core';
import { Mesa } from '../../../../core/models/mesa.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/enviroments';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

 
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
