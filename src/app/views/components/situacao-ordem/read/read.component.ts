import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { SituacaoOrdem } from 'src/app/models/SituacaoOrdem';
import { SituacaoOrdemService } from 'src/app/services/situacaoOrdem-Service/situacao-ordem.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  situacao:SituacaoOrdem [] = [];

  displayedColumns: string[] = ['id', 'nome','action'];

  dataSource = new MatTableDataSource<SituacaoOrdem>(this.situacao);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(private service:SituacaoOrdemService, private router:Router){
  }


  findAll():void{
    this.service.findAll().subscribe((resposta)=> {
      this.situacao = resposta;
      this.dataSource = new MatTableDataSource<SituacaoOrdem>(this.situacao);
      this.dataSource.paginator = this.paginator;
    })
  }
}
