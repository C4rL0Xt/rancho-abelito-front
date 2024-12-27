import { Component, Input } from '@angular/core';
import { SubCategoria } from '../../../../core/models/type.model';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrl: './card-type.component.css'
})
export class CardTypeComponent {

  @Input() subCategoria!: SubCategoria;

  constructor() { }


}
