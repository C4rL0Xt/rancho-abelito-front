import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUpRequest } from '../../../../core/models/signUpRequest.model';
import { ClienteData } from '../../../../core/models/clienteData.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  registerForm;

  @Output() cambioValor = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { 
    this.registerForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      email: '',
      fechaNacimiento: '',
      documento: '',
      telefono: '',
      password: '',
    });
  }


  onSubmit(registerData: any) {
    console.log(registerData);

    const clienteData: ClienteData = {
      nombre: registerData.nombre,
      apellido: registerData.apellido,
      fechaNacimiento: registerData.fechaNacimiento,
      documento: registerData.documento,
      telefono: registerData.telefono,
      email: '',
      direccion: '',
      cuentaId: 1
    }

    const signUpData: SignUpRequest = {
      username: registerData.nombre + ' ' + registerData.apellido,
      email: registerData.email,
      password: registerData.password,
      role: [''],
      clienteData: clienteData
    }


    this.authService.register(signUpData).subscribe(
      (response) => {
        console.log('Respuesta del servidor', response);
        console.log('Usuario registrado');
        
      },
      (error) => {
        console.error('Error al hacer login', error.error.message);
      }
    );
    
  }

  toggleValor() {
    this.cambioValor.emit(!false); // Emite el valor opuesto
  }



}
