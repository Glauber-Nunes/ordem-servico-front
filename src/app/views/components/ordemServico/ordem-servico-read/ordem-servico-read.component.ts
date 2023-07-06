import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { OrdemServicoService } from 'src/app/services/ordem-servico-service/ordem-servico.service';
import { StatusOrdemServico } from '../../../../models/StatusOrdemServico';
import { OSFinalizaServico } from 'src/app/models/OSFinalizaServico';

@Component({
  selector: 'app-ordem-servico-read',
  templateUrl: './ordem-servico-read.component.html',
  styleUrls: ['./ordem-servico-read.component.css']
})
export class OrdemServicoReadComponent {

  statusOrdem: string = 'ENCERRADA'; // 

  os:OrdemServico [] = [];

  ordem: OSFinalizaServico = {
    id: '',
    atendente:'',
    situacaoOrdem: '',
    cliente: '',
    tecnico: '',
    servico: '',
    produto: '',
    fornecedor: '',
    statusOrdemServico: '',
    descricao: '',
    DataDoServico: '',
    DataFechamento: '',
    quantidade: '',
    observacoes: '',
    valorTotalOrdem: ''
  };

  displayedColumns: string[] = ['id', 'cliente', 'DataDoServico', 'DataFechamento','situacaoOrdem', 'statusOrdemServico','action'];

  dataSource = new MatTableDataSource<OrdemServico>(this.os);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }



  constructor(private service:OrdemServicoService, private router:Router,
    private clienteService:ClienteService){
  }

  findAll():void{
      this.service.findAll().subscribe((resposta)=> {
      this.os = resposta;
      this.dataSource = new MatTableDataSource<OrdemServico>(this.os);
      this.dataSource.paginator = this.paginator;
      console.log(this.os)
    })
  }
  navegacaoParaOsSave():void{
    this.router.navigate(['/ordem_servicos/save'])
  }

  getStatusColor(status: string): string {
    if (status === 'ABERTA') {
      return 'green-cell';
    } else if (status === 'ENCERRADA') {
      return 'red-cell';
    }
    return ''; // Retorna uma string vazia caso não haja correspondência
  }


}
