import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor-service/fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent {

  id_fornecedor =''

  fornecedor:Fornecedor = {
    id: '',
    nome: '',
    municipio: '',
    uf:'',
    cnpj:'',
    error: '',
  }

  cnpj = new FormControl('', [Validators.minLength(14)])
  nome = new FormControl('', [Validators.minLength(5)])

  constructor(private router:Router,private service:FornecedorService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_fornecedor = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  

  findById():void{
      this.service.findById(this.id_fornecedor).subscribe((resposta=>{
      this.fornecedor = resposta
    }))
  }

  update():void{
      this.service.update(this.fornecedor).subscribe((resposta=>{
      this.router.navigate(['fornecedores'])
      this.service.message('Fornecedor Atualizado Com Sucesso!')
    }))
  }

  cancelar():void{
    this.router.navigate(['fornecedores']);
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
