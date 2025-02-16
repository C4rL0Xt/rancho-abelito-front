import { ProductoListMesero } from "./productoListMesero.model";

export interface ItemProductMesero{
    producto: ProductoListMesero,
    estado: string,
    cantidad: number,
    descripcion: string,
    subtotal: number
}