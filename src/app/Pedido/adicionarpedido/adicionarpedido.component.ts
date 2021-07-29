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
  selector: 'app-adicionarpedido',
  templateUrl: './adicionarpedido.component.html',
  styleUrls: ['./adicionarpedido.component.css']
})

////////CLASSE COMPONENTE USADO PARA ADICIONAR UM PEDIDO/////////

export class AdicionarpedidoComponent implements OnInit {

  clientes:Cliente[]=[];
  cliente:Cliente=new Cliente();
  pedido:Pedido=new Pedido(); 
  produtos:Produto[]=[];
  produtoSelecionados:Produto[]=[];

  constructor(private pedidoService:PedidoService, private produtoService:ProdutoService,
  private formBuilder:FormBuilder, private clienteService:ClienteserviceService, private router: Router) { }

  formulario: any = FormGroup;

  ngOnInit(): void {
    this.BuscaClientes();
    this.BuscarProdutos();
    this.formulario = this.formBuilder.group({
      cliente: [''],
      totalDaCompra: ['0.0'],
      dataCompra: [''],
      produtos: [''] 
        });
  }

  ///////RETORNA OS CLIENTES PARA SELECTBOX SEREM SELECIONADO/////////////

  BuscaClientes() {
    this.clienteService.getClientes().subscribe(data => {
      console.log(data);
      this.clientes = data;
    });
  }

 ////////RETORNA OS PRODUTOS PARA SEREM SELECIONADOS/////////

  BuscarProdutos(){
    this.produtoService.getProdutos().subscribe(data => {
      console.log(data);
      this.produtos = data;
    });
  }

  ////METODO RESPONSAVEL PELO CADASTRO DO PEDIDO///////////

  OnSubmit(){
     this.cliente = this.formulario.get('cliente').value
     this.pedido.cliente = this.cliente;

     var numberValue = Number(this.formulario.get('totalDaCompra').value);
     this.pedido.totalDaCompra = this.calculaTotalDaCompra(this.produtoSelecionados);
     

     this.pedido.dataCompra =this.formulario.get('dataCompra').value
     console.log(this.pedido.dataCompra);

    
     this.pedido.produtos=this.produtoSelecionados;
     //this.pedido = this.formulario.value;

     console.log(this.cliente);
     console.log(this.pedido);
     
    this.pedidoService.createPedido(this.pedido)
    .subscribe(data=>{alert("Pedido Cadastrado Com Sucesso...!!!");
    this.router.navigate(["listarpedido"]);
     this.formulario.reset(this.pedido);
    })
   }

  ////////METODO RECUPERA PRODUTOS SELECIONADOS NA TABELA PRODUTOS/////////

   showInfo(produto:Produto){
     this.produtoSelecionados.push({...produto});
   }

  ////////METODO CALCULA VALORTOTAL DA COMPRA/////////

   calculaTotalDaCompra(produtos:Produto[]){
     let total=0;
    for (var produto of produtos) {
         total += produto.preco * produto.quantidade;
    }
    return total;
  }
}


