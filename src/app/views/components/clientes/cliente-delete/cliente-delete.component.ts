import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent {

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

  constructor(private router:Router,private service:ClienteService,
    private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id_cliente = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  
  delete():void{
    this.service.delete(this.id_cliente).subscribe((resposta=>{
    this.router.navigate(['clientes'])
    this.service.message("Cliente " + this.cliente.nome +  " Foi excluido com sucesso")
    }))
  }

  findById():void{
      this.service.findById(this.id_cliente).subscribe((resposta=>{
      this.cliente = resposta
    }))
  }
  
  cancelar():void{
    this.router.navigate(['/clientes'])
  }
}
