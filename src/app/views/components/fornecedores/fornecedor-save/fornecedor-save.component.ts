import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor-service/fornecedor.service';

@Component({
  selector: 'app-fornecedor-save',
  templateUrl: './fornecedor-save.component.html',
  styleUrls: ['./fornecedor-save.component.css']
})
export class FornecedorSaveComponent {
  
  fornecedor: Fornecedor = {
    id: '',
    nome: '',
    municipio: '',
    uf: '',
    cnpj: '',
    error: undefined
  }

  cnpj = new FormControl('', [Validators.minLength(14)])
  nome = new FormControl('', [Validators.minLength(5)])

  constructor(private router:Router,private service:FornecedorService){

  }

  save():void{
    this.service.save(this.fornecedor).subscribe((resposta)=>{
    this.router.navigate(['/fornecedores'])
    this.service.message('Fornecedor Salvo Com Sucesso')
    }, err =>{
      if(err.error.error.match('Ja Cadastrado')){
        this.service.message(err.error.error)
        console.log(err)
      }else if(err) {
        this.service.message("CNPJ INVALIDO")
        console.log(err.error.errors[0].message)
      }
    })
  }

  cancelar():void{
    this.router.navigate(['/fornecedores'])
  }

  protected validCnpj(){
    if(this.cnpj.invalid){
      return 'verifique o campo CNPJ deve ser no minimo 14 caracteres'
    }
    return false
  }

  protected validNome(){
    if(this.nome.invalid){
      return 'verifique o campo NOME deve ser no minimo 14 caracteres'
    }
    return false
  }
}
