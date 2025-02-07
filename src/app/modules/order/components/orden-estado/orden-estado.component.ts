import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orden-estado',
  templateUrl: './orden-estado.component.html',
  styleUrl: './orden-estado.component.css'
})
export class OrdenEstadoComponent {

  @Input() mesaId?: number;

  orders = [
    { name: 'Arroz con pollo', cantidad: null, listo: null, entregado: null, estado: 'Por entregar' },
    { name: 'Arroz con pollo', cantidad: null, listo: null, entregado: null, estado: 'Por entregar' },
    { name: 'Arroz con pollo', cantidad: null, listo: null, entregado: null, estado: 'Entregado' },
    { name: 'Arroz con pollo', cantidad: null, listo: null, entregado: null, estado: 'Entregado' }
  ];

  getStatusClass(status: string) {
    return {
      'por-entregar': status === 'Por entregar',
      'entregado': status === 'Entregado'
    };
  }
}
