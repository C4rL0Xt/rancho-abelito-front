import { ProductoListMesero } from "./productoListMesero.model";

export interface ItemProductMesero{
    producto: ProductoListMesero,
    idEstado: number,
    cantidad: number,
    descripcion: string,
    subtotal: number
}