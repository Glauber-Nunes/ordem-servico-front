import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/models/Servico';
import { ServicoService } from 'src/app/services/servico-service/servico.service';

@Component({
  selector: 'app-servico-update',
  templateUrl: './servico-update.component.html',
  styleUrls: ['./servico-update.component.css']
})
export class ServicoUpdateComponent {

  id_servico =''

  servico: Servico = {
    id: '',
    descricao: '',
    preco: ''
  }

  constructor(private router:Router,private service:ServicoService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this. id_servico = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  

  findById():void{
      this.service.findById(this.id_servico).subscribe((resposta=>{
      this.servico = resposta
    }))
  }

  update():void{
      this.service.update(this.servico).subscribe((resposta=>{
      this.router.navigate(['servicos'])
      this.service.message('Serviço Atualizado Com Sucesso!')
    }))
  }

  cancelar():void{
    this.router.navigate(['servicos']);
  }
  
}
