import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../../../core/models/loginRequest.model';
import { TokenService } from '../../services/token-service/token.service';
import { UserService } from '../../../../shared/services/user-service/user.service';

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
    private authService: AuthService,
    private tokenService: TokenService,
    private userService: UserService
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
        this.tokenService.almacenarToken(response.jwtToken);
        this.userService.setUsername(response.username)
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
