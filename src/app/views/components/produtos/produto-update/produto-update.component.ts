import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoServiceService } from 'src/app/services/produto-service/produto-service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent {

  id_produto =''

  produto: Produto = {
    id: '',
    descricao: '',
    preco: '',
    codeBarras:'',
    unEntrada:'',
    unSaida:'',
    estoque:''
  }

  constructor(private router:Router,private service:ProdutoServiceService,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this. id_produto = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  

  findById():void{
      this.service.findById(this.id_produto).subscribe((resposta=>{
      this.produto = resposta
    }))
  }

  update():void{
      this.service.update(this.produto).subscribe((resposta=>{
      this.router.navigate(['produtos'])
      this.service.message('Produto Atualizado Com Sucesso!')
    }))
  }

  cancelar():void{
    this.router.navigate(['produtos']);
  }
  

}
