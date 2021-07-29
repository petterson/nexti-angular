import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';
import { ProdutoService } from 'src/app/Service/produto.service';

@Component({
  selector: 'app-listarproduto',
  templateUrl: './listarproduto.component.html',
  styleUrls: ['./listarproduto.component.css']
})
export class ListarprodutoComponent implements OnInit {

  produtos:Produto[]=[];

  constructor(private service:ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar(){
    this.service.getProdutos().subscribe(data=>{this.produtos=data;})
    this.router.navigate(["listarproduto"]);
  }

  Delete(produto:Produto){
    this.service.deleteProduto(produto).subscribe(data=>{
    this.produtos = this.produtos.filter(p=>p!==produto);})
    //console.log(atividade.id);   
    alert("Produto Deletado Com Sucesso...!!!");
  }

  Atualizar(produto:Produto): void{
   // console.log(id);
    localStorage.setItem("id", produto.id.toString());
    this.router.navigate(["editarproduto"]); 
  }

}
