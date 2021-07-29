import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Model/Cliente';
import { ClienteserviceService } from 'src/app/Service/clienteservice.service';

@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.css']
})
////////CLASSE COMPONENTE USADO PARA EDITAR UM CLIENTE/////////

export class EditarclienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private formBuilder:FormBuilder, private router:Router, private clienteService:ClienteserviceService) { }

  formulario: any = FormGroup;

  ngOnInit(): void {
    this.Atualizar();
  }

  ////////METODO USADO PARA BUSCAR UM CLIENTE/////////

  Atualizar(){
    let id= localStorage.getItem("id");
    var numberValue = Number(id);
    this.clienteService.getCientePorID(numberValue)
    .subscribe(data=>{  
      this.cliente=data;
      this.formulario = this.formBuilder.group({
        id: [this.cliente.id],
        nome: [this.cliente.nome],
        cpf: [this.cliente.cpf],
        dataNascimento: [new Date().getDay()]
        })


        console.log(this.cliente.id);
    })
  }

  ////////METODO USADO PARA ATUALIZAR UM CLIENTE/////////

  OnSubmit(){
    this.cliente = this.formulario.value;
   this.clienteService.updateCliente(this.cliente)
   .subscribe(data=>{alert("Cliente Atualizado Com Sucesso...!!!");
   this.router.navigate(["listarcliente"]);
    this.formulario.reset(this.cliente);
   })
  }

}
