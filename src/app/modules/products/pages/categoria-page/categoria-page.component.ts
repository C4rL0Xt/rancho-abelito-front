
import { Component, OnInit } from '@angular/core';
import { Categoria, Producto, SubCategoria } from '../../../../core/models/type.model';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrl: './categoria-page.component.css'
})
export class CategoriaPageComponent implements OnInit {

  activeTab: number = 0;
  idCategoria!: number;
  categoria!: Categoria;
  subcategorias: SubCategoria[] = [];
  productos: Producto[] = [];
  totalResultados: number = 0;
  openFiltros = false;

  precioMinimo: number | null = null;
  precioMaximo: number | null = null;
  ordenSeleccionado: string | null = null;
  productosFiltrados: Producto[] = [];
  productosPorPrecio: Producto[] = [];
  productosPorOrden: Producto[] = [];
  busquedaNombre: string = '';
  filtrosAplicados: { tipo: string; nombre: string; valor: any }[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

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
    this.productosFiltrados = [...this.productos];
    this.totalResultados = this.productosFiltrados.length;
  }

  menuFiltros() {
    this.openFiltros = !this.openFiltros;
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


  selectTab(index: number): void {
    this.activeTab = index;
    const subcategoriaSeleccionada = this.subcategorias[index];
    this.loadProductos(subcategoriaSeleccionada.idSubcategoria);
  }

  private loadProductos(idSubcategoria: number): void {
    this.productos = this.categoriaService.getProductosBySubcategoria(idSubcategoria);
  }

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

    if (filtroId === 'ordenar') {
      this.ordenSeleccionado = opcion.id;
      this.aplicarFiltroOrden(opcion);
    }
  }

  agregarFiltro(tipo: string, nombre: string, valor: any): void {
    const filtroExistente = this.filtrosAplicados.find(filtro => filtro.tipo === tipo);
  
    if (filtroExistente) {
      filtroExistente.nombre = nombre;
      filtroExistente.valor = valor;
    } else {
      this.filtrosAplicados.push({ tipo, nombre, valor });
    }
  
    this.actualizarProductosFiltrados();
  }

  eliminarFiltro(filtro: { tipo: string; nombre: string; valor: any }): void {
    this.filtrosAplicados = this.filtrosAplicados.filter(f => f !== filtro);
  
    // Resetear el estado del filtro eliminado
    switch (filtro.tipo) {
      case 'nombre':
        this.busquedaNombre = '';
        break;
      case 'precio':
        this.precioMinimo = null;
        this.precioMaximo = null;
        break;
      case 'ordenar':
        this.ordenSeleccionado = null;
        break;
    }
  
    this.actualizarProductosFiltrados();
  }

  aplicarFiltroBusqueda(): void {
    if (this.busquedaNombre.trim()) {
      this.agregarFiltro('nombre', `Buscar: "${this.busquedaNombre}"`, this.busquedaNombre);
    } else {
      const filtroNombre = this.filtrosAplicados.find(f => f.tipo === 'nombre');
      if (filtroNombre) this.eliminarFiltro(filtroNombre);
    }
  }
  
  aplicarFiltroPrecio(): void {
    const rango = `Hasta S/${this.precioMaximo || '∞'}`;
    this.agregarFiltro('precio', rango, { minimo: this.precioMinimo, maximo: this.precioMaximo });
  }
  
  aplicarFiltroOrden(opcion: any): void {
    const nombre = opcion.titulo;
    this.agregarFiltro('ordenar', nombre, opcion.id);
  }
  
  actualizarProductosFiltrados(): void {
    let productosFiltrados = [...this.productos];
  
    this.filtrosAplicados.forEach(filtro => {
      switch (filtro.tipo) {
        case 'nombre':
          productosFiltrados = productosFiltrados.filter(producto =>
            producto.nombre.toLowerCase().includes(filtro.valor.toLowerCase())
          );
          break;
  
        case 'precio':
          productosFiltrados = productosFiltrados.filter(producto => {
            const cumpleMin = filtro.valor.minimo !== null ? producto.precio >= filtro.valor.minimo : true;
            const cumpleMax = filtro.valor.maximo !== null ? producto.precio <= filtro.valor.maximo : true;
            return cumpleMin && cumpleMax;
          });
          break;
  
        case 'ordenar':
          switch (filtro.valor) {
            case 'op1':
              break;
            case 'op2':
              productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
              break;
            case 'op3':
              productosFiltrados.sort((a, b) => a.precio - b.precio);
              break;
          }
          break;
      }
    });
  0 
    this.productosFiltrados = productosFiltrados;
    this.totalResultados = productosFiltrados.length;
  }

}
