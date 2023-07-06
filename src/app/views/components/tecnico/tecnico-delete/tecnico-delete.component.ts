import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/Tecnico';
import { TecnicoServiceService } from 'src/app/services/tecnico-service/tecnico-service.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent {

  id_tecnico =''

  tecnico: Tecnico = {
    id: '',
    nome: ''
  }

  constructor(private router:Router,private service:TecnicoServiceService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_tecnico = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  delete():void{
    this.service.delete(this.id_tecnico).subscribe((resposta=>{
    this.router.navigate(['tecnicos'])
    this.service.message("Excluido com sucesso")
    }))
  }

  findById():void{
      this.service.findById(this.id_tecnico).subscribe((resposta=>{
      this.tecnico = resposta
    }))
  }
  
  cancelar():void{
    this.router.navigate(['/tecnicos'])
  }
}
