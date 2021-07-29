import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Model/Cliente';

///////////////////CLASSE CRIA SERVIÇO DE CONEXÃO PARA CLIENTE/////////////////

@Injectable({
  providedIn: 'root'
})
export class ClienteserviceService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/clientes'; 

////////////////////RETORNA LISTA DE CLIENTES/////////////////

   getClientes(){
    return this.http.get<Cliente[]>(this.url);
  }

////////////////////CRIA UM NOVO CLIENTE/////////////////

   createCliente(cliente:Cliente){
     return this.http.post<Cliente>(this.url,cliente);
   }

////////////////////REMOVE CLIENTE/////////////////

   deleteCliente(cliente:Cliente){
    console.log(cliente.id); 
    return this.http.delete<Cliente>(this.url+"/"+cliente.id);
   }

  ////////////////////ATUALIZA CLIENTE/////////////////

  updateCliente(cliente:Cliente){
    console.log(cliente);
    console.log(cliente.id);
     return this.http.put<Cliente>(this.url+"/"+cliente.id, cliente);
  }

 ////////////////////BUSCA CLIENTE PARA ATUALIZAR/////////////////

  getCientePorID(id:number){
    return this.http.get<Cliente>(this.url+"/"+id);
  }
}
