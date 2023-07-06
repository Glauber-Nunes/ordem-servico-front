import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/template/home/home.component';
import { AtendenteReadComponent } from './views/components/atendente/atendente-read/atendente-read.component';
import { AtendenteSaveComponent } from './views/components/atendente/atendente-save/atendente-save.component';
import { TelaAjudaComponent } from './views/components/template/tela-ajuda/tela-ajuda.component';
import { ClienteReadComponent } from './views/components/clientes/cliente-read/cliente-read.component';
import { ClienteSaveComponent } from './views/components/clientes/cliente-save/cliente-save.component';
import { FornecedorReadComponent } from './views/components/fornecedores/fornecedor-read/fornecedor-read.component';
import { FornecedorSaveComponent } from './views/components/fornecedores/fornecedor-save/fornecedor-save.component';
import { ProdutoReadComponent } from './views/components/produtos/produto-read/produto-read.component';
import { ProdutoSaveComponent } from './views/components/produtos/produto-save/produto-save.component';
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
import { ReadComponent } from './views/components/situacao-ordem/read/read.component';
import { UpdateComponent } from './views/components/situacao-ordem/update/update.component';
import { OrdemServicoReadComponent } from './views/components/ordemServico/ordem-servico-read/ordem-servico-read.component';
import { OrdemServicoSaveComponent } from './views/components/ordemServico/ordem-servico-save/ordem-servico-save.component';
import { PdvReadComponent } from './views/components/pdv/pdv-read/pdv-read.component';
import { OrdemServicoUpdateComponent } from './views/components/ordemServico/ordem-servico-update/ordem-servico-update.component';
import { OrdemServicoFinalizarServicoComponent } from './views/components/ordemServico/ordem-servico-view/ordem-servico-view.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'atendentes',
  component:AtendenteReadComponent
},
{
  path:'atendentes/save',
  component:AtendenteSaveComponent
},
{
  path:'ajuda',
  component:TelaAjudaComponent
},
{
  path:'clientes',
  component:ClienteReadComponent
},
{
  path:'clientes/save',
  component:ClienteSaveComponent
},
{
  path:'fornecedores',
  component:FornecedorReadComponent
},
{
  path:'fornecedores/save',
  component:FornecedorSaveComponent
},
{
  path:'produtos',
  component:ProdutoReadComponent
},
{
  path:'produtos/save',
  component:ProdutoSaveComponent
},
{
  path:'servicos',
  component:ServicoReadComponent
},
{
  path:'servicos/save',
  component:ServicoSaveComponent
},
{
  path:'atendentes/update/:id',
  component:AtendenteUpdateComponent
},
{
  path:'clientes/update/:id',
  component:ClienteUpdateComponent
},
{
  path:'fornecedores/update/:id',
  component:FornecedorUpdateComponent
},
{
  path:'produtos/update/:id',
  component:ProdutoUpdateComponent
},
{
  path:'servicos/update/:id',
  component:ServicoUpdateComponent
},
{
  path:'atendentes/delete/:id',
  component:AtendenteDeleteComponent
},
{
  path:'clientes/delete/:id',
  component:ClienteDeleteComponent
},
{
  path:'fornecedores/delete/:id',
  component:FornecedorDeleteComponent
},
{
  path:'produtos/delete/:id',
  component:ProdutoDeleteComponent
},
{
  path:'servicos/delete/:id',
  component:ServicoDeleteComponent
},
{
  path:'tecnicos',
  component:TecnicoReadComponent
},
{
  path:'tecnicos/save',
  component:TecnicoSaveComponent
},
{
  path:'tecnicos/update/:id',
  component:TecnicoUpdateComponent
},
{
  path:'situacao-ordens',
  component:ReadComponent
},
{
  path:'situacao-ordens/update/:id',
  component:UpdateComponent
},
{
  path:'os',
  component:OrdemServicoReadComponent
},
{
  path:'ordem_servicos/save',
  component:OrdemServicoSaveComponent
},
{
  path:'pdv',
  component:PdvReadComponent
},

{
  path:'os/view-servico/:id',
  component:OrdemServicoFinalizarServicoComponent
},
{
  path: 'os/update/:id',
  component:OrdemServicoUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
