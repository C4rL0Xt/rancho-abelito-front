import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {


  @Output() cambioValor = new EventEmitter<boolean>();

  toggleValor() {
    this.cambioValor.emit(!false); // Emite el valor opuesto
  }
}
