import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent {
  
  id_cliente = ''

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
  cpf = new FormControl('', [Validators.minLength(11)]) // validaçao do nome para o formulario
  telefone = new FormControl('', [Validators.minLength(11)])

  constructor(private router:Router,private service:ClienteService, private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_cliente = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  

  findById():void{
      this.service.findById(this.id_cliente).subscribe((resposta=>{
      this.cliente = resposta
    }))
  }

  update():void{
      this.service.update(this.cliente).subscribe((resposta=>{
      this.router.navigate(['clientes'])
      this.service.message('Cliente Atualizado Com Sucesso!')
    }))
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
