import { Component, OnInit } from '@angular/core';
import { Categoria, Producto, SubCategoria } from '../../../../core/models/type.model';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrl: './categoria-page.component.css'
})
export class CategoriaPageComponent implements OnInit{

  idCategoria!: number;
  categoria!: Categoria;
  subcategorias: SubCategoria[] = []; 
  productos: Producto[] = [];
  activeTab: number = 0;

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idCategoria = +params['idCategoria'];

      const categoria = this.categoriaService.getCategoriaById(this.idCategoria);
      if (categoria) {
        this.categoria = categoria;
      } else {
        console.error('Categoría no encontrada para el ID:', this.idCategoria);
      }

      this.subcategorias = this.categoriaService.getSubcategoriasByCategoria(this.idCategoria);
      
      if (this.subcategorias.length > 0) {
        this.loadProductos(this.subcategorias[0].idSubcategoria);
      }

    });
  }

  selectTab(index: number): void{
    this.activeTab = index;
    const subcategoriaSeleccionada = this.subcategorias[index];
    this.loadProductos(subcategoriaSeleccionada.idSubcategoria);

  }

  private loadProductos(idSubcategoria: number): void {
    this.productos = this.categoriaService.getProductosBySubcategoria(idSubcategoria);
  }

  filtros = [
    {
      id: 'precio',
      titulo: 'Precio',
      expanded: false,
      opciones: [
        { id: 'precio1', titulo: 'Hasta S/60 (10)', seleccionado: false },
        { id: 'precio2', titulo: 'S/30 a S/40 (5)', seleccionado: false },
        { id: 'precio3', titulo: 'Hasta S/20 (0)', seleccionado: false }
      ]
    },
    {
      id: 'ordenar',
      titulo: 'Ordenar por',
      expanded: false,
      opciones: [
        { id: 'op1', titulo: 'Los más pedidos', seleccionado: false },
        { id: 'op2', titulo: 'Ascendente alfabéticamente', seleccionado: false },
        { id: 'op3', titulo: 'De menor a mayor precio', seleccionado: false }
      ]
    }
  ];

  toggleFiltro(id: string): void {
    this.filtros = this.filtros.map((filtro) =>
      filtro.id === id ? { ...filtro, expanded: !filtro.expanded } : filtro
    );
  }

  onSeleccionarOpcion(filtroId: string, opcion: any): void {
    this.filtros = this.filtros.map((filtro) => {
      if (filtro.id === filtroId) {
        filtro.opciones = filtro.opciones.map((op) =>
          op.id === opcion.id
            ? { ...op, seleccionado: true }
            : { ...op, seleccionado: false }
        );
      }
      return filtro;
    });

    console.log(`Filtro seleccionado: ${filtroId}, Opción: ${opcion.titulo}`);
  }



precioMinimo: number | null = null;
precioMaximo: number | null = null;


aplicarRangoPrecio(filtroId: string): void {
  if (this.precioMinimo !== null && this.precioMaximo !== null && this.precioMinimo <= this.precioMaximo) {
    console.log(`Filtro de precio aplicado: Mínimo=${this.precioMinimo}, Máximo=${this.precioMaximo}`);
    
    // Aquí puedes enviar el rango de precios al backend o filtrar datos en tiempo real
    this.filtros = this.filtros.map((filtro) => {
      if (filtro.id === filtroId) {
        filtro.opciones = filtro.opciones.map((op) => ({ ...op, seleccionado: false }));
      }
      return filtro;
    });
  } else {
    console.error("Rango de precios inválido");
  }
}

}
