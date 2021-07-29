import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AdicionarclienteComponent } from './Cliente/adicionarcliente/adicionarcliente.component';
import { ListarclienteComponent } from './Cliente/listarcliente/listarcliente.component';
import { EditarclienteComponent } from './Cliente/editarcliente/editarcliente.component';
import { ClienteserviceService } from './Service/clienteservice.service';
import { AdicionarprodutoComponent } from './Produto/adicionarproduto/adicionarproduto.component';
import { ListarprodutoComponent } from './Produto/listarproduto/listarproduto.component';
import { EditarprodutoComponent } from './Produto/editarproduto/editarproduto.component';
import { AdicionarpedidoComponent } from './Pedido/adicionarpedido/adicionarpedido.component';
import { ListarpedidoComponent } from './Pedido/listarpedido/listarpedido.component';
import { EditarpedidoComponent } from './Pedido/editarpedido/editarpedido.component';
import { ProdutoService } from './Service/produto.service';
import { PedidoService } from './Service/pedido.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdicionarclienteComponent,
    ListarclienteComponent,
    EditarclienteComponent,
    AdicionarprodutoComponent,
    ListarprodutoComponent,
    EditarprodutoComponent,
    AdicionarpedidoComponent,
    ListarpedidoComponent,
    EditarpedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ClienteserviceService, ProdutoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
