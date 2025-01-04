import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
  animations: [
    trigger('boxAnimation', [
        state('login', style({ transform: 'rotateY(0)' })),
        state('register', style({ transform: 'rotateY(180deg)' })),
        transition('login <=> register', animate('600ms ease-in-out'))
    ]),
    trigger('formAnimation', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ]),
        transition(':leave', [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
        ])
    ]),
    trigger('imageAnimation', [
        state('login', style({ transform: 'scale(1)' })),
        state('register', style({ transform: 'scale(0.9)' })),
        transition('login <=> register', animate('800ms ease-in-out'))
    ])
]
})
export class AuthPageComponent {

  valorCompartido: boolean = true;
  isFormVisible = false; 

  actualizarValor(nuevoValor: boolean) {
    this.valorCompartido = nuevoValor;
    console.log("El valor pasa a: ", this.valorCompartido)

    /*const image = document.getElementById('abelito');
    image?.classList.toggle('moved');*/
  }


}
