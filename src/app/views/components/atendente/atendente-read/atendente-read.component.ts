import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Atendente } from 'src/app/models/Atendente';
import { AtendenteService } from 'src/app/services/atendente-service/atendente.service';

@Component({
  selector: 'app-atendente-read',
  templateUrl: './atendente-read.component.html',
  styleUrls: ['./atendente-read.component.css']
})
export class AtendenteReadComponent implements AfterViewInit {

  atendentes:Atendente [] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf','action'];

  dataSource = new MatTableDataSource<Atendente>(this.atendentes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(private service:AtendenteService, private router:Router){
  }


  findAll():void{
    this.service.findAll().subscribe((resposta)=> {
      this.atendentes = resposta;
      this.dataSource = new MatTableDataSource<Atendente>(this.atendentes);
      this.dataSource.paginator = this.paginator;
    })
  }

  navegacaoParaAtendenteSave():void{
    this.router.navigate(['/atendentes/save'])
  }
  
}

