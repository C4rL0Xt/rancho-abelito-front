import { ItemPedidoPresencial } from "./ItemPedidoPresencial.model";

export interface PedidoPresencial {
    idMesero: string,
    idMesa: number,
    detalles: ItemPedidoPresencial[]
}