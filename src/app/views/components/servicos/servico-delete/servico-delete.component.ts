import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/models/Servico';
import { ServicoService } from 'src/app/services/servico-service/servico.service';

@Component({
  selector: 'app-servico-delete',
  templateUrl: './servico-delete.component.html',
  styleUrls: ['./servico-delete.component.css']
})
export class ServicoDeleteComponent {

  id_servico =''

  servico: Servico = {
    id: '',
    descricao: '',
    preco: ''
  }

  constructor(private router:Router,private service:ServicoService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_servico = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  delete():void{
    this.service.delete(this.id_servico).subscribe((resposta=>{
    this.router.navigate(['servicos']) // volta para tela da lista de produtos
    this.service.message("Serviço excluido com sucesso")
    }))
  }

  findById():void{
      this.service.findById(this.id_servico).subscribe((resposta=>{
      this.servico = resposta
    }))
  }
  
  cancelar():void{
    this.router.navigate(['/servicos'])
  }

}
