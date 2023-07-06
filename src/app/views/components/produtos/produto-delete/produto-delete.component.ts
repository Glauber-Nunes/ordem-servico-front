import { Component } from '@angular/core';
import { Produto } from '../../../../models/Produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoServiceService } from 'src/app/services/produto-service/produto-service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent {

  id_produto = ''

  produto:Produto ={
  id: '',
  descricao:'',
  preco:'',
  codeBarras:'',
  unEntrada:'',
  unSaida:'',
  estoque:''
  }

  constructor(private router:Router,private service:ProdutoServiceService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_produto = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  delete():void{
    this.service.delete(this.id_produto).subscribe((resposta=>{
    this.router.navigate(['produtos']) // volta para tela da lista de produtos
    this.service.message("Produto excluido com sucesso")
    }))
  }

  findById():void{
      this.service.findById(this.id_produto).subscribe((resposta=>{
      this.produto = resposta
    }))
  }
  
  cancelar():void{
    this.router.navigate(['/produtos'])
  }

}
