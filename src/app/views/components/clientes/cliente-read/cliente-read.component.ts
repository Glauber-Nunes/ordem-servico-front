import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent {

  clientes:Cliente [] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf','rg','telefone','email','endereco','action'];

  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(private service:ClienteService, private router:Router){
  }


  findAll():void{
      this.service.findAll().subscribe((resposta)=> {
      this.clientes = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(this.clientes);
      this.dataSource.paginator = this.paginator;
    })
  }

  navegacaoParaClienteSave():void{
    this.router.navigate(['/clientes/save'])
  }
}
