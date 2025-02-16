import { CarritoDetail } from "./carritoDetail.model";

export interface ResponsePedido {
    idPedido: number,
    idCarrito: number,
    detalles: CarritoDetail[],
}