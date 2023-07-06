import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';

@Component({
  selector: 'app-cliente-save',
  templateUrl: './cliente-save.component.html',
  styleUrls: ['./cliente-save.component.css']
})
export class ClienteSaveComponent {

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    rg:'',
    telefone:'',
    email:'',
    endereco:''
  }

  nome = new FormControl('', [Validators.minLength(5)]) // variavel para validaçao do nome para o formulario
  cpf = new FormControl('', [Validators.minLength(14)]) // validaçao do nome para o formulario
  telefone = new FormControl('', [Validators.minLength(11)])

  constructor(private router:Router,private service:ClienteService){

  }

  save():void{
    this.service.save(this.cliente).subscribe((resposta)=>{
    this.router.navigate(['/clientes'])
    this.service.message('Cliente Salvo Com Sucesso')
    }, err =>{
      if(err.error.error.match('Ja Cadastrado')){
        this.service.message(err.error.error)
        console.log(err)
      }else{
       
      }
    })
  }

  cancelar():void{
    this.router.navigate(['/clientes'])
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

  protected errorValidFone(){
    if(this.cpf.invalid){
      return 'verifique o campo TELEFONE deve ter no minimo 11 caracteres'
    }
    return false
  }
}
