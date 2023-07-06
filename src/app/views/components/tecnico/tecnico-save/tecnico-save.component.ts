import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/Tecnico';
import { TecnicoServiceService } from 'src/app/services/tecnico-service/tecnico-service.service';

@Component({
  selector: 'app-tecnico-save',
  templateUrl: './tecnico-save.component.html',
  styleUrls: ['./tecnico-save.component.css']
})
export class TecnicoSaveComponent {

  tecnico: Tecnico = {
    id: '',
    nome: '',
  }

  nome = new FormControl('', [Validators.minLength(5)])
  
  nomeVazio: boolean = true;
  
  constructor(private router:Router,private service:TecnicoServiceService){

  }

  save():void{
    this.service.save(this.tecnico).subscribe((resposta)=>{
    this.router.navigate(['/tecnicos'])
    this.service.message('Tecnico Salvo Com Sucesso')
    })
  }

  cancelar():void{
    this.router.navigate(['/tecnicos'])
  }
  protected errorValidNome(){
    if(this.nome.invalid){
      return 'verifique o campo NOME deve ser maior que 5 caracteres'
    }
    return false
  }  

  verificarNomeVazio(): void {
    this.nomeVazio = !this.tecnico.nome || this.tecnico.nome.length <5;
  }
}
