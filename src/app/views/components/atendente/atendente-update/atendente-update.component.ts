import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendente } from 'src/app/models/Atendente';
import { AtendenteService } from 'src/app/services/atendente-service/atendente.service';

@Component({
  selector: 'app-atendente-update',
  templateUrl: './atendente-update.component.html',
  styleUrls: ['./atendente-update.component.css']
})
export class AtendenteUpdateComponent {

  id_atendente = ''

  atendente: Atendente = {
    id: '',
    nome: '',
    cpf: '',
  }

  nome = new FormControl('', [Validators.minLength(5)]) // variavel para validaçao do nome para o formulario
  cpf = new FormControl('', [Validators.minLength(11)]) // validaçao do nome para o formulario

  constructor(private router:Router,private service:AtendenteService,
    private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_atendente = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  

  findById():void{
      this.service.findById(this.id_atendente).subscribe((resposta=>{
      this.atendente = resposta
    }))
  }

  update():void{
      this.service.update(this.atendente).subscribe((resposta=>{
      this.router.navigate(['atendentes'])
      this.service.message('Atendente Atualizado Com Sucesso!')
    }))
  }
  cancelar():void{
    this.router.navigate(['/atendentes'])
  }

  protected errorValidNome(){
    if(this.nome.invalid){
      return 'verifique o campo NOME deve ser maior que 5 caracteres'
    }
    return false
  }

  protected errorValidCpf(){
    if(this.cpf.invalid){
      return 'verifique o campo CPF deve ter no minimo 11 caracteres'
    }
    return false
  }
}
