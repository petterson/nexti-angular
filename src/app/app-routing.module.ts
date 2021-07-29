import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarclienteComponent } from './Cliente/adicionarcliente/adicionarcliente.component';
import { EditarclienteComponent } from './Cliente/editarcliente/editarcliente.component';
import { ListarclienteComponent } from './Cliente/listarcliente/listarcliente.component';
import { AdicionarpedidoComponent } from './Pedido/adicionarpedido/adicionarpedido.component';
import { EditarpedidoComponent } from './Pedido/editarpedido/editarpedido.component';
import { ListarpedidoComponent } from './Pedido/listarpedido/listarpedido.component';
import { AdicionarprodutoComponent } from './Produto/adicionarproduto/adicionarproduto.component';
import { EditarprodutoComponent } from './Produto/editarproduto/editarproduto.component';
import { ListarprodutoComponent } from './Produto/listarproduto/listarproduto.component';

const routes: Routes = [
  {path:'listarcliente', component: ListarclienteComponent},
  {path:'adicionarcliente', component: AdicionarclienteComponent},
  {path:'editarcliente', component: EditarclienteComponent},
  {path:'listarproduto', component: ListarprodutoComponent},
  {path:'adicionarproduto', component: AdicionarprodutoComponent},
  {path:'editarproduto', component: EditarprodutoComponent},
  {path:'listarpedido', component: ListarpedidoComponent},
  {path:'adicionarpedido', component: AdicionarpedidoComponent},
  {path:'editarpedido', component: EditarpedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
