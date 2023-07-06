import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoServiceService } from 'src/app/services/produto-service/produto-service';

@Component({
  selector: 'app-produto-save',
  templateUrl: './produto-save.component.html',
  styleUrls: ['./produto-save.component.css']
})
export class ProdutoSaveComponent {

  produto: Produto = {
    id: '',
    descricao: '',
    preco: '',
    codeBarras:'',
    unEntrada:'',
    unSaida:'',
    estoque:''
  }

  constructor(private router:Router,private service:ProdutoServiceService){

  }

  save():void{
    this.service.save(this.produto).subscribe((resposta)=>{
    this.router.navigate(['/produtos'])
    this.service.message('Produto Salvo Com Sucesso')
    })
  }

  cancelar():void{
    this.router.navigate(['/produtos'])
  }
}
