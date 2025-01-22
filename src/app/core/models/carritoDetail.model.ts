import { Producto } from "./type.model";

export interface CarritoDetail{
    producto: Producto,
    cantidad: number,
    adicionales: string
    total: number
}