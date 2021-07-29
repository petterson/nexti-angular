import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/Model/Cliente';
import { Pedido } from 'src/app/Model/Pedido';
import { Produto } from 'src/app/Model/Produto';
import { ClienteserviceService } from 'src/app/Service/clienteservice.service';
import { PedidoService } from 'src/app/Service/pedido.service';
import { ProdutoService } from 'src/app/Service/produto.service';

@Component({
  selector: 'app-editarpedido',
  templateUrl: './editarpedido.component.html',
  styleUrls: ['./editarpedido.component.css']
})
////////CLASSE COMPONENTE USADO PARA EDITAR UM PEDIDO/////////

export class EditarpedidoComponent implements OnInit {

  clientes:Cliente[]=[];
  preecheClientes:Cliente[]=[];
  cliente:Cliente=new Cliente();
  pedido:Pedido=new Pedido(); 
  produtos:Produto[]=[];
  produtoSelecionados:Produto[]=[];
  produtoAuxiliar:Produto[]=[];

  constructor(private formBuilder:FormBuilder, private router:Router, private produtoService:ProdutoService,
    private pedidoService:PedidoService, private clienteService:ClienteserviceService) { }

    formulario: any = FormGroup;

  ngOnInit(): void {  
    this.Atualizar();
  }

////////METODO USADO OARA SETAR O PEDIDO NO FORMULARIO UM PEDIDO/////////

  Atualizar(){
    let id= localStorage.getItem("id");
    var numberValue = Number(id);
    this.pedidoService.getPedidoPorID(numberValue)
    .subscribe(data=>{  
      this.pedido=data;

      this.BuscarClientes();
      this.BuscarProdutos();
      
      this.clientes.push(this.pedido.cliente);
      this.produtos = this.pedido.produtos;

     this.formulario = this.formBuilder.group({
        id: [this.pedido.id],
        cliente: [this.pedido.cliente],
        dataCompra: [this.pedido.dataCompra],
        totalDaCompra: ['0.0'],
        produtos: [this.produtos],
        })
    })
  }

  ///////RETORNA OS CLIENTES PARA SELECTBOX SEREM SELECIONADOS////////

  BuscarClientes() {
    this.clienteService.getClientes().subscribe(data => {
      this.preecheClientes = data;
    });
  }

  ///////RETORNA OS PRODUTOS PARA LISTA DE PRODUTOS SEREM SELECIONADS

 BuscarProdutos(){
    this.produtoService.getProdutos().subscribe(data => {
      this.produtoAuxiliar= data;
    });
  }

/////METODO RESPONSÁVEL POR ATUALIZAR O PEDIDO/////////////

  OnSubmit(){

    this.cliente = this.formulario.get('cliente').value
    this.pedido.cliente = this.cliente;

    this.pedido.totalDaCompra = this.calculaTotalDaCompra(this.produtoSelecionados);
    this.pedido.dataCompra =new Date(this.formulario.get('dataCompra').value)
    this.pedido.produtos = this.produtoSelecionados
    
    console.log(this.pedido);
   this.pedidoService.updatePedido(this.pedido)
   .subscribe(data=>{alert("Pedido Atualizado Com Sucesso...!!!");
   this.router.navigate(["listarpedido"]);
    this.formulario.reset(this.pedido);
   })
  }

////////METODO RECUPERA OA PRODUTOS SELECIONADOS NA TABELA PRODUTOS/////////

  showInfo(produto:Produto){
    this.produtoSelecionados.push({...produto});
  }

  /////////METODO ATUALIZA OS PRODUTOS NA TABELA PRODUTO PARA SEREM SELECIONADOS////////

  alterarProduto(){
    this.produtos = this.produtoAuxiliar;
    this.produtoAuxiliar=[];
  }

   /////////METODO ATUALIZA OS CLIENTE NO SECTBOX PARA SEREM SELECIONADOS////////

  alterarCliente(){
    this.clientes = this.preecheClientes;
  }

  ///////CALCULA O VALOT TOTAL DA COMPRA

  calculaTotalDaCompra(produtos:Produto[]){
    let total=0;
    for (var produto of produtos) {
         total += produto.preco * produto.quantidade;
    }
    return total;
  }
}

