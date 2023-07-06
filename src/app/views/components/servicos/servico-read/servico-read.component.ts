import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Servico } from 'src/app/models/Servico';
import { ServicoService } from 'src/app/services/servico-service/servico.service';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.css']
})
export class ServicoReadComponent {
  servicos:Servico [] = [];

  displayedColumns: string[] = ['id', 'descricao', 'preco','action'];

  dataSource = new MatTableDataSource<Servico>(this.servicos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(private service:ServicoService, private router:Router){
  }


  findAll():void{
    this.service.findAll().subscribe((resposta)=> {
      this.servicos = resposta;
      this.dataSource = new MatTableDataSource<Servico>(this.servicos);
      this.dataSource.paginator = this.paginator;
    })
  }

  navegacaoParaServicoSave():void{
    this.router.navigate(['/servicos/save'])
  }
  
}
