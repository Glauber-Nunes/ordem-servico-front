import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoServiceService } from 'src/app/services/produto-service/produto-service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent {

  produtos:Produto [] = [];

  displayedColumns: string[] = ['id', 'descricao', 'preco','codeBarras','unEntrada','unSaida', 'estoque','action'];

  dataSource = new MatTableDataSource<Produto>(this.produtos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(private service:ProdutoServiceService, private router:Router){
  }


  findAll():void{
    this.service.findAll().subscribe((resposta)=> {
      this.produtos = resposta;
      this.dataSource = new MatTableDataSource<Produto>(this.produtos);
      this.dataSource.paginator = this.paginator;
    })
  }

  navegacaoParaProdutoSave():void{
    this.router.navigate(['/produtos/save'])
  }
  
}
