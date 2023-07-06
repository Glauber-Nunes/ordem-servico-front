import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SituacaoOrdem } from 'src/app/models/SituacaoOrdem';
import { SituacaoOrdemService } from 'src/app/services/situacaoOrdem-Service/situacao-ordem.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  id_situacao =''

  situacao: SituacaoOrdem = {
    id: '',
    nome: '',
  }

  constructor(private router:Router,private service:SituacaoOrdemService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this. id_situacao = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  

  findById():void{
      this.service.findById(this.id_situacao).subscribe((resposta=>{
      this.situacao = resposta
    }))
  }

  update():void{
      this.service.update(this.situacao).subscribe((resposta=>{
      this.router.navigate(['situacao-ordens'])
      this.service.message('Atualizado Com Sucesso!')
    }))
  }

  cancelar():void{
    this.router.navigate(['situacao-ordens']);
  }
  
}
