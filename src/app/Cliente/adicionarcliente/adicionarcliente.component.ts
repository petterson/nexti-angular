import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Model/Cliente';
import { ClienteserviceService } from 'src/app/Service/clienteservice.service';

@Component({
  selector: 'app-adicionarcliente',
  templateUrl: './adicionarcliente.component.html',
  styleUrls: ['./adicionarcliente.component.css']
})

////////CLASSE COMPONENTE USADO PARA ADICIONAR UM CLIENTE/////////

export class AdicionarclienteComponent implements OnInit {

  cliente: Cliente = new Cliente;

  constructor(private formBuilder:FormBuilder, private router:Router, private clienteService:ClienteserviceService) { }

  formulario: any = FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      dataNascimento: [new Date]
      });
  }

////////CMETODO USADO PARA ADICIONAR UM CLIENTE/////////

  OnSubmit(){
    this.cliente = this.formulario.value;
    console.log(this.cliente);
   this.clienteService.createCliente(this.cliente)
   .subscribe(data=>{alert("Cliente Cadastrado Com Sucesso...!!!");
   this.router.navigate(["listarcliente"]);
    this.formulario.reset(this.cliente);
   })
  }

}
