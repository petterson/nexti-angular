import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/Model/Pedido';
import { PedidoService } from 'src/app/Service/pedido.service';

@Component({
  selector: 'app-listarpedido',
  templateUrl: './listarpedido.component.html',
  styleUrls: ['./listarpedido.component.css']
})

////CLASSE COMPONENTE USADO PARA LISTAR E DELETAR PEDIDO////

export class ListarpedidoComponent implements OnInit {

  pedidos:Pedido[]=[];

  constructor(private pedidoService:PedidoService, private router: Router) { }

  ngOnInit(): void {
    this.Listar();
  }

  ////////METODO BUSCA OS PEDIDOS////////

  Listar(){
    this.pedidoService.getPedidos().subscribe(data=>{this.pedidos=data;})
    this.router.navigate(["listarpedido"]);
  }

  ////////METODO USADO PARA DELETAR PEDIDO//////////

  Delete(pedido:Pedido){
    this.pedidoService.deletePedido(pedido).subscribe(data=>{
    this.pedidos = this.pedidos.filter(p=>p!==pedido);})  
    alert("Pedido Deletado Com Sucesso...!!!");
  }

/////////METODO USADO PARA ENVIAR ID DO PEDIDO PARA EDITAR//////////

  Atualizar(pedido:Pedido): void{
   // console.log(id);
    localStorage.setItem("id", pedido.id.toString());
    this.router.navigate(["editarpedido"]); 
  }

}
