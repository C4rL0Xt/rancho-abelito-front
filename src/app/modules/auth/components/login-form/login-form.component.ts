import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  @Output() cambioValor = new EventEmitter<boolean>();

  toggleValor() {
    this.cambioValor.emit(!true); // Emite el valor opuesto
  }
}
