import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
  @Output() dialogClosed = new EventEmitter<void>();

  closeDialog(): void{
    this.dialogClosed.emit();
  }
}
