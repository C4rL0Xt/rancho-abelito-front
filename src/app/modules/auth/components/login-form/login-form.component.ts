import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../../../core/models/loginRequest.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  @Output() cambioValor = new EventEmitter<boolean>();

  loginForm;
  mensajeError = '';


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    }); 
  }

  onSumit(data: any) {

    const loginData: LoginRequest = {
      username: data.email,
      password: data.password
    };

    console.log('Formulario enviado', loginData);

    this.authService.login(loginData).subscribe(
      (response) => {
        console.log('Respuesta del servidor', response);
        localStorage.setItem('token', response.jwtToken);
        window.location.href = '/';
      },
      (error) => {
        console.error('Error al hacer login', error.error.message);
        this.mensajeError = error.error.message;
  
      }
    );
  }

  toggleValor() {
    this.cambioValor.emit(!true); // Emite el valor opuesto
  }
}
