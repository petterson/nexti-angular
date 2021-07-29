import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';
import { ProdutoService } from 'src/app/Service/produto.service';

@Component({
  selector: 'app-adicionarproduto',
  templateUrl: './adicionarproduto.component.html',
  styleUrls: ['./adicionarproduto.component.css']
})
export class AdicionarprodutoComponent implements OnInit {

  produto: Produto = new Produto;

  constructor(private formBuilder:FormBuilder, private router:Router, private produtoService:ProdutoService) { }

  formulario: any = FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      preco: [0],
      quantidade: [0]
      });
  }

  OnSubmit(){
    this.produto = this.formulario.value;
    console.log(this.produto);
   this.produtoService.createProduto(this.produto)
   .subscribe(data=>{alert("Produto Cadastrado Com Sucesso...!!!");
   this.router.navigate(["listarproduto"]);
    this.formulario.reset(this.produto);
   })
  }

}
