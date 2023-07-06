import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/models/Servico';
import { ServicoService } from 'src/app/services/servico-service/servico.service';

@Component({
  selector: 'app-servico-save',
  templateUrl: './servico-save.component.html',
  styleUrls: ['./servico-save.component.css']
})
export class ServicoSaveComponent {

  servico: Servico = {
    id: '',
    descricao: '',
    preco: ''
  }

  constructor(private router:Router,private service:ServicoService){

  }

  save():void{
    this.service.save(this.servico).subscribe((resposta)=>{
    this.router.navigate(['/servicos'])
    this.service.message('Serviço Salvo Com Sucesso')
    })
  }

  cancelar():void{
    this.router.navigate(['/servicos'])
  }
}
