import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendente } from 'src/app/models/Atendente';
import { AtendenteService } from 'src/app/services/atendente-service/atendente.service';

@Component({
  selector: 'app-atendente-delete',
  templateUrl: './atendente-delete.component.html',
  styleUrls: ['./atendente-delete.component.css']
})
export class AtendenteDeleteComponent {

  id_atendente = ''

  atendente: Atendente = {
    id: '',
    nome: '',
    cpf: '',
  }

  constructor(private router:Router,private service:AtendenteService,
    private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_atendente = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  
  delete():void{
    this.service.delete(this.id_atendente).subscribe((resposta=>{
    this.router.navigate(['atendentes'])
    this.service.message("Atendente " + this.atendente.nome +  " Foi excluido com sucesso")
    }))
  }

  findById():void{
      this.service.findById(this.id_atendente).subscribe((resposta=>{
      this.atendente = resposta
    }))
  }
  
  cancelar():void{
    this.router.navigate(['/atendentes'])
  }
}
