import { Component, Input } from '@angular/core';
import { Local } from '../../../../core/models/local.model';

@Component({
  selector: 'app-locals-card',
  templateUrl: './locals-card.component.html',
  styleUrl: './locals-card.component.css'
})
export class LocalsCardComponent {

  @Input() local!: Local;



}
