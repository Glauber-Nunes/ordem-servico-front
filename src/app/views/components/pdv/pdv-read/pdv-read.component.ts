import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoServiceService } from 'src/app/services/produto-service/produto-service';

@Component({
  selector: 'app-pdv-read',
  templateUrl: './pdv-read.component.html',
  styleUrls: ['./pdv-read.component.css']
})
export class PdvReadComponent {

  produtos:Produto [] = [];

  displayedColumns: string[] = ['id', 'descricao', 'preco','codeBarras','unEntrada','unSaida', 'estoque','action'];

  dataSource = new MatTableDataSource<Produto>(this.produtos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
  
  }

  constructor(private service:ProdutoServiceService, private router:Router){
  }

  produto: Produto = {
    id: '',
    descricao: '',
    preco: '',
    codeBarras:'',
    unEntrada:'',
    unSaida:'',
    estoque:''
  }  
}
