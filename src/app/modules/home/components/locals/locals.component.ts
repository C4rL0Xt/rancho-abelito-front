import { Component } from '@angular/core';
import { Local } from '../../../../core/models/local.model';

@Component({
  selector: 'app-locals',
  templateUrl: './locals.component.html',
  styleUrl: './locals.component.css'
})
export class LocalsComponent {

  locales: Local[] = [
    {
      nombre: "Sede Alcazar",
      ubicacion: 'Av. Alcazar',
      telefono: '+51 990574421',
      horario: '11:00 AM - 11:00 PM',
      imagen: 'https://www.saboresperuanos.pe/views/layout/default/img/sedes/molina.jpg'
    },
    {
      nombre: "Sede Oasis",
      ubicacion: 'Av. 200 Millas',
      telefono: '+51 990574421',
      horario: '11:00 AM - 11:00 PM',
      imagen: 'https://img.restaurantguru.com/c0ef-Restaurant-Comida-casera-El-Rincon-hogareno-photo.jpg'
    }
  ];

}
