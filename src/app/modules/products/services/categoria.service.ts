import { Injectable } from '@angular/core';
import { Categoria, SubCategoria, Producto } from '../../../core/models/type.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private productos: Producto[] = [
    {
      idProducto: 1,
      idSubcategoria: 1,
      nombre: "Arroz con Pollo",
      descripcion: "Pescado fresco marinado en jugo de limón con cebolla, ají y culantro.",
      precio: 15,
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/ceviche_pescado.jpg?raw=true"
    },{
      idProducto: 2,
      idSubcategoria: 1,
      nombre: "Causa Limeña",
      descripcion: "Capa de puré de papa amarilla con pollo, atún o mariscos, servida con palta y mayonesa.",
      precio: 55,
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/causa_limeña.jpg?raw=true"
    },{
      idProducto: 3,
      idSubcategoria: 1,
      nombre: "Bar",
      descripcion: "Capa de puré de papa amarilla con pollo, atún o mariscos, servida con palta y mayonesa.",
      precio: 10,
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/causa_limeña.jpg?raw=true"
    },{
      idProducto: 4,
      idSubcategoria: 1,
      nombre: "Aea",
      descripcion: "Capa de puré de papa amarilla con pollo, atún o mariscos, servida con palta y mayonesa.",
      precio: 25,
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/causa_limeña.jpg?raw=true"
    },{
      idProducto: 5,
      idSubcategoria: 1,
      nombre: "ZZZ",
      descripcion: "Capa de puré de papa amarilla con pollo, atún o mariscos, servida con palta y mayonesa.",
      precio: 25,
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/causa_limeña.jpg?raw=true"
    }
    
    
    
    
    
    ,{
      idProducto: 6,
      idSubcategoria: 2,
      nombre: "Nose",
      descripcion: "Capa de puré de papa amarilla con pollo, atún o mariscos, servida con palta y mayonesa.",
      precio: 25,
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/productos/causa_limeña.jpg?raw=true"
    }
  ];

  private subcategorias: SubCategoria[] = [
    {
      idSubcategoria: 1,
      idCategoria: 1,
      nombre: "Frias",
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/subcategorias/entradafria.jpg?raw=true"
    },{
      idSubcategoria: 2,
      idCategoria: 1,
      nombre: "Calientes",
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/subcategorias/entradacaliente.jpg?raw=true"
    },{
      idSubcategoria: 3,
      idCategoria: 2,
      nombre: "Marinos",
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/subcategorias/entradacaliente.jpg"
    },{
      idSubcategoria: 4,
      idCategoria: 2,
      nombre: "Criollos",
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/subcategorias/entradacaliente.jpg"
    },{
      idSubcategoria: 5,
      idCategoria: 2,
      nombre: "Parrillas",
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/subcategorias/entradacaliente.jpg"
    },{
      idSubcategoria: 6,
      idCategoria: 2,
      nombre: "Vegetarianos",
      imageUrl: "https://github.com/C4rL0Xt/images_repo/blob/master/subcategorias/entradacaliente.jpg"
    }
  ];

   private categorias: Categoria[] = [
      {
        idCategoria: 1,
        nombre: 'Entradas',
        imageUrl: 'https://s1.elespanol.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009517_1706x1280.jpg'
      },
      {
        idCategoria: 2,
        nombre: 'Platos fuertes',
        imageUrl: 'https://www.paulinacocina.net/wp-content/uploads/2020/01/tacos-meat-food-mexican-lunch-dinner.jpg'
      },{
        idCategoria: 1,
        nombre: 'Entradas',
        imageUrl: 'https://s1.elespanol.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009517_1706x1280.jpg'
      },
      {
        idCategoria: 2,
        nombre: 'Platos fuertes',
        imageUrl: 'https://www.paulinacocina.net/wp-content/uploads/2020/01/tacos-meat-food-mexican-lunch-dinner.jpg'
      },
      {
        idCategoria: 3,
        nombre: 'Postres',
        imageUrl: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=1224%3Aauto'
      }, {
        idCategoria: 4,
        nombre: 'Postres',
        imageUrl: 'https://www.bbva.com/wp-content/uploads/2023/04/cocina-de-aprovechamiento-1024x629.jpg'
      }, {
        idCategoria: 5,
        nombre: 'Postres',
        imageUrl: 'https://editorialtelevisa.brightspotcdn.com/58/eb/b537a4714c11890dfba66649ee13/flautas-transformed.jpeg'
      }
    ];

    getCategoriaById(idCategoria: number): Categoria | undefined {
      return this.categorias.find(categoria => categoria.idCategoria === idCategoria);
    }
    
    getCategorias(): Categoria[] {
      return this.categorias;
    }

    getSubcategoriasByCategoria(idCategoria: number): SubCategoria[] {
      return this.subcategorias.filter(subcategoria => subcategoria.idCategoria === idCategoria);
    }

    getProductosBySubcategoria(idSubcategoria: number): Producto[] {
      return this.productos.filter(producto => producto.idSubcategoria === idSubcategoria);
    }

  constructor() { }
}
