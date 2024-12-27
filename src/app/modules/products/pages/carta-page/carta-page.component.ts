import { Component, OnInit } from '@angular/core';
import { SubCategoria } from '../../../../core/models/type.model';

@Component({
  selector: 'app-carta-page',
  templateUrl: './carta-page.component.html',
  styleUrl: './carta-page.component.css'
})
export class CartaPageComponent implements OnInit{

  types: SubCategoria[] = [
    {
      idSubcategoria: 1,
      nombre: 'Entradas',
      imageUrl: 'https://s1.elespanol.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009517_1706x1280.jpg'
    },
    {
      idSubcategoria: 2,
      nombre: 'Platos fuertes',
      imageUrl: 'https://www.paulinacocina.net/wp-content/uploads/2020/01/tacos-meat-food-mexican-lunch-dinner.jpg'
    },
    {
      idSubcategoria: 3,
      nombre: 'Postres',
      imageUrl: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=1224%3Aauto'
    }, {
      idSubcategoria: 4,
      nombre: 'Postres',
      imageUrl: 'https://www.bbva.com/wp-content/uploads/2023/04/cocina-de-aprovechamiento-1024x629.jpg'
    }, {
      idSubcategoria: 5,
      nombre: 'Postres',
      imageUrl: 'https://editorialtelevisa.brightspotcdn.com/58/eb/b537a4714c11890dfba66649ee13/flautas-transformed.jpeg'
    },{
      idSubcategoria: 1,
      nombre: 'Entradas',
      imageUrl: 'https://s1.elespanol.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009517_1706x1280.jpg'
    },
    {
      idSubcategoria: 2,
      nombre: 'Platos fuertes',
      imageUrl: 'https://www.paulinacocina.net/wp-content/uploads/2020/01/tacos-meat-food-mexican-lunch-dinner.jpg'
    },
    {
      idSubcategoria: 3,
      nombre: 'Postres',
      imageUrl: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=1224%3Aauto'
    }, {
      idSubcategoria: 4,
      nombre: 'Postres',
      imageUrl: 'https://www.bbva.com/wp-content/uploads/2023/04/cocina-de-aprovechamiento-1024x629.jpg'
    }, {
      idSubcategoria: 5,
      nombre: 'Postres',
      imageUrl: 'https://editorialtelevisa.brightspotcdn.com/58/eb/b537a4714c11890dfba66649ee13/flautas-transformed.jpeg'
    }
  ];


  constructor() { 
    console.log('CartaPageComponent created');
  }

  ngOnInit(){
    console.log('CartaPageComponent initialized');
  }

}
