import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CabecalhoComponent } from './views/components/template/cabecalho/cabecalho.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavlateralComponent } from './views/components/template/navlateral/navlateral.component';
import { HomeComponent } from './views/components/template/home/home.component';
import { AtendenteReadComponent } from './views/components/atendente/atendente-read/atendente-read.component';
import { AtendenteSaveComponent } from './views/components/atendente/atendente-save/atendente-save.component';
import {MatMenuModule} from '@angular/material/menu';
import { TelaAjudaComponent } from './views/components/template/tela-ajuda/tela-ajuda.component';
import { ClienteReadComponent } from './views/components/clientes/cliente-read/cliente-read.component';
import { ClienteSaveComponent } from './views/components/clientes/cliente-save/cliente-save.component';
import { FornecedorReadComponent } from './views/components/fornecedores/fornecedor-read/fornecedor-read.component';
import { FornecedorSaveComponent } from './views/components/fornecedores/fornecedor-save/fornecedor-save.component';
import { ProdutoReadComponent } from './views/components/produtos/produto-read/produto-read.component';
import { ProdutoSaveComponent } from './views/components/produtos/produto-save/produto-save.component';
import { ProdutoServiceService } from './services/produto-service/produto-service';
import { ServicoReadComponent } from './views/components/servicos/servico-read/servico-read.component';
import { ServicoSaveComponent } from './views/components/servicos/servico-save/servico-save.component';
import { AtendenteUpdateComponent } from './views/components/atendente/atendente-update/atendente-update.component';
import { ClienteUpdateComponent } from './views/components/clientes/cliente-update/cliente-update.component';
import { FornecedorUpdateComponent } from './views/components/fornecedores/fornecedor-update/fornecedor-update.component';
import { ProdutoUpdateComponent } from './views/components/produtos/produto-update/produto-update.component';
import { ServicoUpdateComponent } from './views/components/servicos/servico-update/servico-update.component';
import { AtendenteDeleteComponent } from './views/components/atendente/atendente-delete/atendente-delete.component';
import { ClienteDeleteComponent } from './views/components/clientes/cliente-delete/cliente-delete.component';
import { FornecedorDeleteComponent } from './views/components/fornecedores/fornecedor-delete/fornecedor-delete.component';
import { ProdutoDeleteComponent } from './views/components/produtos/produto-delete/produto-delete.component';
import { ServicoDeleteComponent } from './views/components/servicos/servico-delete/servico-delete.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoSaveComponent } from './views/components/tecnico/tecnico-save/tecnico-save.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { OrdemServicoReadComponent } from './views/components/ordemServico/ordem-servico-read/ordem-servico-read.component';
import { OrdemServicoSaveComponent } from './views/components/ordemServico/ordem-servico-save/ordem-servico-save.component';
import { OrdemServicoUpdateComponent } from './views/components/ordemServico/ordem-servico-update/ordem-servico-update.component';
import { OrdemServicoDeleteComponent } from './views/components/ordemServico/ordem-servico-delete/ordem-servico-delete.component';
import { ReadComponent } from './views/components/situacao-ordem/read/read.component';
import { UpdateComponent } from './views/components/situacao-ordem/update/update.component';
import { PdvReadComponent } from './views/components/pdv/pdv-read/pdv-read.component';
import { OrdemServicoFinalizarServicoComponent } from './views/components/ordemServico/ordem-servico-view/ordem-servico-view.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    NavlateralComponent,
    HomeComponent,
    AtendenteReadComponent,
    AtendenteSaveComponent,
    TelaAjudaComponent,
    ClienteReadComponent,
    ClienteSaveComponent,
    FornecedorReadComponent,
    FornecedorSaveComponent,
    ProdutoReadComponent,
    ProdutoSaveComponent,
    ServicoReadComponent,
    ServicoSaveComponent,
    AtendenteUpdateComponent,
    ClienteUpdateComponent,
    FornecedorUpdateComponent,
    ProdutoUpdateComponent,
    ServicoUpdateComponent,
    AtendenteDeleteComponent,
    ClienteDeleteComponent,
    FornecedorDeleteComponent,
    ProdutoDeleteComponent,
    ServicoDeleteComponent,
    TecnicoReadComponent,
    TecnicoSaveComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    OrdemServicoReadComponent,
    OrdemServicoSaveComponent,
    OrdemServicoUpdateComponent,
    OrdemServicoDeleteComponent,
    ReadComponent,
    UpdateComponent,
    PdvReadComponent,
    OrdemServicoFinalizarServicoComponent,
    
  ],
  imports: [
    BrowserModule,
AppRoutingModule,
FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
HttpClientModule,
BrowserModule,
AppRoutingModule,
BrowserAnimationsModule,
MatToolbarModule,
MatSidenavModule,
MatIconModule,
MatButtonModule,
MatListModule,
MatCardModule,
MatTableModule,
MatSelectModule,
MatInputModule,
MatDatepickerModule,
MatPaginatorModule,
MatSnackBarModule,
MatMenuModule,
MatProgressSpinnerModule,
MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
