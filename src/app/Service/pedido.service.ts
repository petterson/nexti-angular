import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../Model/Pedido';

///////////////////CLASSE CRIA SERVIÇO DE CONEXÃO PARA PEDIDO/////////////////

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/pedidos'; 

////////////////////RETORNA LISTA DE PEDIDO/////////////////

   getPedidos(){
    return this.http.get<Pedido[]>(this.url);
  }

////////////////////CRIA UM NOVO PEDIDO/////////////////

   createPedido(pedido:Pedido){
     return this.http.post<Pedido>(this.url, pedido);
   }

////////////////////REMOVE PEDIDO/////////////////

   deletePedido(pedido:Pedido){
    console.log(pedido.id); 
    return this.http.delete<Pedido>(this.url+"/"+pedido.id);
   }

  ////////////////////ATUALIZA PEDIDO/////////////////

  updatePedido(pedido:Pedido){
    console.log(pedido);
     return this.http.put<Pedido>(this.url+"/"+pedido.id, pedido);
  }

 ////////////////////BUSCA PEDIDO PARA ATUALIZAR/////////////////

  getPedidoPorID(id:number){
    return this.http.get<Pedido>(this.url+"/"+id);
  }
}
