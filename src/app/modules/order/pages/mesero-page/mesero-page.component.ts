import { Component } from '@angular/core';
import { Mesa } from '../../../../core/models/mesa.model';
import { MesaService } from '../../services/mesa/mesa.service';

@Component({
  selector: 'app-mesero-page',
  templateUrl: './mesero-page.component.html',
  styleUrl: './mesero-page.component.css'
})
export class MeseroPageComponent {
  mesas: Mesa[] = [];

  constructor(
    private mesaService: MesaService
  ) {

   this.getMesas();

  }


  getMesas() {
    this.mesaService.getMessas().subscribe((response) => {
      this.mesas = response;
    });
  }

}
