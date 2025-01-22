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
    this.categoriaService.getCategorias().subscribe({
      next: (categorias: Categoria[]) => {
        this.types = categorias;
      },
      error: (err) => {
        console.error('Error al cargar las categorias: ', err);
      }
    }); 
    console.log('CartaPageComponent created');
  }

  ngOnInit(){
    console.log('CartaPageComponent initialized');
  }

}
