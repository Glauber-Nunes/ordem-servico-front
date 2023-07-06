import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/Tecnico';
import { TecnicoServiceService } from 'src/app/services/tecnico-service/tecnico-service.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent {

  id_tecnico =''

  tecnico: Tecnico = {
    id: '',
    nome: ''
  }
  nome = new FormControl('', [Validators.minLength(5)])
  nomeVazio: boolean = true;
  constructor(private router:Router,private service:TecnicoServiceService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this. id_tecnico = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  

  findById():void{
      this.service.findById(this.id_tecnico).subscribe((resposta=>{
      this.tecnico = resposta
    }))
  }

  update():void{
      this.service.update(this.tecnico).subscribe((resposta=>{
      this.router.navigate(['tecnicos'])
      this.service.message('Tecnico Atualizado Com Sucesso!')
    }))
  }

  cancelar():void{
    this.router.navigate(['tecnicos']);
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
