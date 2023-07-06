import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AtendenteService } from 'src/app/services/atendente-service/atendente.service';
import { Atendente } from '../../../../models/Atendente';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-atendente-save',
  templateUrl: './atendente-save.component.html',
  styleUrls: ['./atendente-save.component.css']
})
export class AtendenteSaveComponent {

  atendente: Atendente = {
    id: '',
    nome: '',
    cpf: '',
  }

  nome = new FormControl('', [Validators.minLength(5)]) // variavel para validaçao do nome para o formulario
  cpf = new FormControl('', [Validators.minLength(11)]) // validaçao do nome para o formulario

  constructor(private router:Router,private service:AtendenteService){

  }


  save():void{
    this.service.save(this.atendente).subscribe((resposta)=>{
    this.router.navigate(['/atendentes'])
    this.service.message('Atendente Salvo Com Sucesso')
    }, err =>{
      if(err.error.error.match('Ja Cadastrado')){// condiçao para pegar cpf ja cadastrado
        this.service.message(err.error.error)
      }else if(err) { // condiçao para pegar cpf invalido
        this.service.message("CPF informado inválido.")
        console.log(err)
      }
    })
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


