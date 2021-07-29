import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';
import { ProdutoService } from 'src/app/Service/produto.service';

@Component({
  selector: 'app-editarproduto',
  templateUrl: './editarproduto.component.html',
  styleUrls: ['./editarproduto.component.css']
})
export class EditarprodutoComponent implements OnInit {


  produto: Produto = new Produto();

  constructor(private formBuilder:FormBuilder, private router:Router, private produtoService:ProdutoService) { }

  formulario: any = FormGroup;

  ngOnInit(): void {
    this.Atualizar();
  }

  Atualizar(){
    let id= localStorage.getItem("id");
    var numberValue = Number(id);
    this.produtoService.getProdutoPorID(numberValue)
    .subscribe(data=>{  
      this.produto=data;
      this.formulario = this.formBuilder.group({
        id: [this.produto.id],
        nome: [this.produto.nome],
        descricao: [this.produto.descricao],
        preco: [this.produto.preco],
        quantidade: [this.produto.quantidade]
        })
    })
  }

  OnSubmit(){
    this.produto = this.formulario.value;
   this.produtoService.updateProduto(this.produto)
   .subscribe(data=>{alert("Produto Atualizado Com Sucesso...!!!");
   this.router.navigate(["listarproduto"]);
    this.formulario.reset(this.produto);
   })
  }

}
