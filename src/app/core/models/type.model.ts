export interface Categoria {
    idCategoria: number,
    nombre: string,
    imageUrl: string
}

export interface SubCategoria{
    idSubcategoria: number,
    nombre: string,
 
}

export interface Producto{
    idProducto: number,
    idSubcategoria: number,
    nombre: string,
    descripcion: string,
    precio: number,
    imagenUrl: string
}