import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { OSFinalizaServico } from 'src/app/models/OSFinalizaServico';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { OrdemServicoService } from 'src/app/services/ordem-servico-service/ordem-servico.service';

@Component({
  selector: 'app-ordem-servico-finalizar-servico',
  templateUrl: './ordem-servico-view.component.html',
  styleUrls: ['./ordem-servico-view.component.css']
})
export class OrdemServicoFinalizarServicoComponent {

  id_ordem = ''

  isSaving: boolean = false; // variavel para aparecer progresso de salvar na tela


  ordem: OSFinalizaServico = {
    id: '',
    atendente:'',
    situacaoOrdem: '',
    cliente: '',
    tecnico: '',
    servico: '',
    produto: '',
    fornecedor: '',
    statusOrdemServico: '',
    descricao: '',
    DataDoServico: '',
    DataFechamento: '',
    quantidade: '',
    observacoes: '',
    valorTotalOrdem: ''
  };

  
  constructor(private router:Router,private service:OrdemServicoService,
    private route:ActivatedRoute){

  }

 /*
     update():void{
      this.service.update(this.cliente).subscribe((resposta=>{
      this.router.navigate(['clientes'])
      this.service.message('Cliente Atualizado Com Sucesso!')
    }))
  }
    }*/

    finalizaServico(): void {
      this.isSaving = true && this.ordem.statusOrdemServico.id==1;
      this.service.finalizaServico2(this.ordem) // chamando a funcao finalizaServico2 para pode acessar direto o model da ordem de serviço e nao o DTO OsForm 
      
        .pipe(
          catchError((error) => {
            // Lógica para tratar o erro
            console.error('Ocorreu um erro:', error);
            this.service.message('A ORDEM DE SERVIÇO JA ESTA ENCERRADA')
            // Retornar um observable de erro vazio para continuar o fluxo
            return of(null);
          })
        )
        
        .subscribe((resposta) => {
          if (resposta) {
            this.isSaving = false;
            this.router.navigate(['os']);
            this.service.message('ORDEM DE SERVIÇO NUMERO ' + this.ordem.id + ' ENCERRADA COM SUCESSO!');
          }
        });
    }

  ngOnInit():void{
    this.id_ordem = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById():void{
    this.service.findById2(this.id_ordem).subscribe((resposta=>{
    this.ordem = resposta;
  }))
}

cancelar():void{
  this.router.navigate(['os'])
}

imprimir() {
  window.print();
}

}
