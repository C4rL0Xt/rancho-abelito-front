import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../../core/models/loginRequest.model';
import { LoginResponse } from '../../../core/models/loginResponse.model';
import { SignUpRequest } from '../../../core/models/signUpRequest.model';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly LOGIN_URL = environment.api_login;
  private readonly REGISTER_URL = environment.api_register;

  
  constructor(
    private httpClient: HttpClient
  ) { 
    
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.LOGIN_URL, request);
  }

  register(request: SignUpRequest): Observable<string> {
    return this.httpClient.post<string>(this.REGISTER_URL, request);
  }
}
