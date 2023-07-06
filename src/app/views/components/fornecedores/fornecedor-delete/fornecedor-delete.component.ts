import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor-service/fornecedor.service';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent {

  id_forne = ''

  fornecedor:Fornecedor = {
    id: '',
    nome: '',
    municipio: '',
    uf: '',
    cnpj: '',
    error: undefined
  }
  
  constructor(private router:Router,private service:FornecedorService,
    private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_forne = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  delete():void{
    this.service.delete(this.id_forne).subscribe((resposta=>{
    this.router.navigate(['fornecedores'])
    this.service.message("Foi excluido com sucesso")
    }))
  }

  findById():void{
      this.service.findById(this.id_forne).subscribe((resposta=>{
      this.fornecedor = resposta
    }))
  }
  
  cancelar():void{
    this.router.navigate(['/fornecedores'])
  }
}
