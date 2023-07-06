import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Atendente } from 'src/app/models/Atendente';
import { Cliente } from 'src/app/models/Cliente';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { Produto } from 'src/app/models/Produto';
import { Servico } from 'src/app/models/Servico';
import { Tecnico } from 'src/app/models/Tecnico';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { OrdemServicoService } from 'src/app/services/ordem-servico-service/ordem-servico.service';
import { TecnicoServiceService } from '../../../../services/tecnico-service/tecnico-service.service';
import { AtendenteService } from 'src/app/services/atendente-service/atendente.service';
import { FornecedorService } from 'src/app/services/fornecedor-service/fornecedor.service';
import { ProdutoServiceService } from 'src/app/services/produto-service/produto-service';
import { ServicoService } from 'src/app/services/servico-service/servico.service';
import { SituacaoOrdem } from '../../../../models/SituacaoOrdem';
import { SituacaoOrdemService } from 'src/app/services/situacaoOrdem-Service/situacao-ordem.service';

@Component({
  selector: 'app-ordem-servico-save',
  templateUrl: './ordem-servico-save.component.html',
  styleUrls: ['./ordem-servico-save.component.css']
})
export class OrdemServicoSaveComponent {

  isSaving: boolean = false; // variavel para aparecer progresso de salvar na tela

  clientes:Cliente [] = [] // array de clientes
  tecnicos:Tecnico [] = []
  atendentes:Atendente []= []
  fornecedores:Fornecedor []= []
  produtos:Produto []=[]
  servicos:Servico[]=[]
  situacaoOrdems:SituacaoOrdem []=[]
  
  ordem: OrdemServico = {
    id: '',
    atendente_id:'',
    situacaoOrdem_id: '',
    cliente_id: '',
    tecnico_id: '',
    servico_id: '',
    produto_id: '',
    fornecedor_id: '',
    statusOrdemServico_id: '',
    descricao: '',
    DataDoServico: '',
    DataFechamento: '',
    quantidade: '',
    observacoes: '',
    valorTotalOrdem: ''
  };


  constructor(private router:Router,private service:OrdemServicoService
    ,private clienteService:ClienteService,
    private tecnicoServiceService:TecnicoServiceService,
    private atendenteService:AtendenteService,
    private fornecedorService:FornecedorService,
    private produtoService:ProdutoServiceService,
    private servicoService:ServicoService,
    private situacaoService:SituacaoOrdemService){

  }

  ngOnInit():void{
    this.listaSituacao();
    this.listaCliente();
    this.listaAtendente();
    this.listaFornecedor();
    this.listaProduto();
    this.listaServico();
    this.listaTecnico();
  }

  listaSituacao():void{
    this.situacaoService.findAll().subscribe((resposta=>{
      this.situacaoOrdems = resposta;
    }))
  }
  
  listaCliente():void{
    this.clienteService.findAll().subscribe((resposta=>{
    this.clientes = resposta;
    }))
  }

  listaTecnico():void{
    this.tecnicoServiceService.findAll().subscribe((resposta=>{
    this.tecnicos = resposta;
    }))
  }

  listaAtendente():void{
    this.atendenteService.findAll().subscribe((resposta=>{
    this.atendentes = resposta;
    }))
  }

  listaFornecedor():void{
    this.fornecedorService.findAll().subscribe((resposta=>{
    this.fornecedores = resposta;
    }))
  }

  listaProduto():void{
    this.produtoService.findAll().subscribe((resposta=>{
    this.produtos = resposta;
    }))
  }

  listaServico():void{
    this.servicoService.findAll().subscribe((resposta=>{
    this.servicos = resposta;
    }))
  }

  cancelar():void{
    this.router.navigate(['os'])
  }

  save(): void {
    this.isSaving = true;
    this.service.save(this.ordem).subscribe((resposta) => {
      this.isSaving = false;
      this.router.navigate(['/os']);
      this.service.message('Ordem De Serviço Incluida Com Sucesso');
    });
  }
  
}
