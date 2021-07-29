import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../Model/Produto';

///////////////////CLASSE CRIA SERVIÇO DE CONEXÃO PARA PRODUTO/////////////////

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/produtos'; 

////////////////////RETORNA LISTA DE PRODUTOS/////////////////

   getProdutos(){
    return this.http.get<Produto[]>(this.url);
  }

////////////////////CRIA UM NOVO PRODUTO/////////////////

   createProduto(produto:Produto){
     return this.http.post<Produto>(this.url,produto);
   }

////////////////////REMOVE PRODUTO/////////////////

   deleteProduto(produto:Produto){
    console.log(produto.id); 
    return this.http.delete<Produto>(this.url+"/"+produto.id);
   }

  ////////////////////ATUALIZA PRODUTO/////////////////

  updateProduto(produto:Produto){
    console.log(produto);
     return this.http.put<Produto>(this.url+"/"+produto.id, produto);
  }

 ////////////////////BUSCA PRODUTO PARA ATUALIZAR/////////////////

  getProdutoPorID(id:number){
    return this.http.get<Produto>(this.url+"/"+id);
  }

}
