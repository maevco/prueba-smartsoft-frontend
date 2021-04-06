import { Cliente } from "./Cliente";

export class Factura{
    id!: number;
    numeroFactura!: String;
    cliente!: Cliente;
    fecha!: Date;    
}