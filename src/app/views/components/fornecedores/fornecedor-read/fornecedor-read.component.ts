import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor-service/fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent {
  fornecedores:Fornecedor [] = [];

  displayedColumns: string[] = ['id', 'nome', 'municipio', 'uf','cnpj','action'];

  dataSource = new MatTableDataSource<Fornecedor>(this.fornecedores);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(private service:FornecedorService, private router:Router){
  }


  findAll():void{
    this.service.findAll().subscribe((resposta)=> {
      this.fornecedores = resposta;
      this.dataSource = new MatTableDataSource<Fornecedor>(this.fornecedores);
      this.dataSource.paginator = this.paginator;
    })
  }

  navegacaoParaFornecedorSave():void{
    this.router.navigate(['/fornecedores/save'])
  }
}
