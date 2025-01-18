export interface Categoria {
    idCategoria: number,
    nombre: string,
    imageUrl: string
}

export interface SubCategoria{
    idSubcategoria: number,
    idCategoria: number,
    nombre: string,
    imageUrl: string
}

export interface Producto{
    idProducto: number,
    idSubcategoria: number,
    nombre: string,
    descripcion: string,
    precio: number,
    imageUrl: string
}