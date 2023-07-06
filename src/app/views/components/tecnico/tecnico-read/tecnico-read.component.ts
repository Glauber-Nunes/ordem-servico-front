import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/Tecnico';
import { TecnicoServiceService } from 'src/app/services/tecnico-service/tecnico-service.service';

@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css']
})
export class TecnicoReadComponent {

  tecnicos:Tecnico [] = [];

  displayedColumns: string[] = ['id', 'nome', 'action'];

  dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(private service:TecnicoServiceService, private router:Router){
  }


  findAll():void{
      this.service.findAll().subscribe((resposta)=> {
      this.tecnicos = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);
      this.dataSource.paginator = this.paginator;
    })
  }

  navegacaoParaTecnicoSave():void{
    this.router.navigate(['/tecnicos/save'])
  }
}
