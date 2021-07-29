import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Model/Cliente';
import { ClienteserviceService } from 'src/app/Service/clienteservice.service';

@Component({
  selector: 'app-listarcliente',
  templateUrl: './listarcliente.component.html',
  styleUrls: ['./listarcliente.component.css']
})

////////CLASSE COMPONENTE USADO PARA LISTAR E DELETAR UM CLIENTE/////////

export class ListarclienteComponent implements OnInit {

  clientes:Cliente[]=[];

  constructor(private service:ClienteserviceService, private router: Router) { 
    this.Listar();
  }

  ngOnInit(): void {
    this.Listar();
  }

  ////////BUSCA TODOS OS CLIENTES/////////

  Listar(){
    this.service.getClientes().subscribe(data=>{this.clientes=data;})
    this.router.navigate(["listarcliente"]);
  }

 ////////METODO DELETA SO CLIENTES/////////

  Delete(cliente:Cliente){
    this.service.deleteCliente(cliente).subscribe(data=>{
    this.clientes = this.clientes.filter(p=>p!==cliente);})  
    alert("Cliente Deletado Com Sucesso...!!!");
  }

  ////////METODO PASSA O ID DO CLIENTE SELECIONADO NA TABELA LISTA PARA ATUALIZAR/////////

  Atualizar(cliente:Cliente): void{
    localStorage.setItem("id", cliente.id.toString());
    this.router.navigate(["editarcliente"]); 
  }

}
