import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../core/models/type.model';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-carta-page',
  templateUrl: './carta-page.component.html',
  styleUrl: './carta-page.component.css'
})
export class CartaPageComponent implements OnInit{

  types: Categoria[] = [];
 

  constructor(private categoriaService: CategoriaService) {
    this.types = this.categoriaService.getCategorias(); 
    console.log('CartaPageComponent created');
  }

  ngOnInit(){
    console.log('CartaPageComponent initialized');
  }

}
