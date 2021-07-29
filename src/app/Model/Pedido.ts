import { Cliente } from "./Cliente"
import { Produto } from "./Produto";

/////////CLASSE MODEL PEDIDO//////

export class Pedido{
    id:number=0;
    cliente:Cliente = new Cliente;
    totalDaCompra:number=0;
    dataCompra:Date = new Date();
    produtos: Produto[]=[];

}