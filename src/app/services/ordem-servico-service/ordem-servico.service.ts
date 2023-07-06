import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { OSFinalizaServico } from 'src/app/models/OSFinalizaServico';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { OrdemServicoFinalizarServicoComponent } from 'src/app/views/components/ordemServico/ordem-servico-view/ordem-servico-view.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  baseUrl: String = environment.baseUrlApi;

  constructor(private http : HttpClient,private snack:MatSnackBar) { }

  // funçao para retornar todos as OS do banco de dados
  findAll():Observable<OrdemServico[]>{
    const url = this.baseUrl + "/ordem_servicos";
    return this.http.get<OrdemServico[]>(url);
  }

  findById(id:any):Observable<OrdemServico>{
    const url = this.baseUrl + "/ordem_servicos/" + id;
    return this.http.get<OrdemServico>(url);
  }

  // funçao para ser usada no componente OrdemServico-finaliza-servico
  findById2(id:any):Observable<OSFinalizaServico>{
    const url = this.baseUrl + "/ordem_servicos/" + id;
    return this.http.get<OSFinalizaServico>(url);
  }

  update(os:OrdemServico):Observable<OrdemServico>{
    const url = this.baseUrl + "/ordem_servicos/" + os.id;
    return this.http.put<OrdemServico>(url,os);
  }

  delete(id:any):Observable<void>{
    const url = this.baseUrl + "/ordem_servicos/" + id;
    return this.http.delete<void>(url)
  }

   //funçao para criar nova OS
   save(os:OrdemServico):Observable<OrdemServico>{
    const url = this.baseUrl + "/ordem_servicos";
    return this.http.post<OrdemServico>(url,os);
  }

  // funçao para finalizar serviço
  finalizaServico(os:OrdemServico):Observable<OrdemServico>{
    const url = this.baseUrl + "/ordem_servicos/finalizar-servico/" + os.id;
    return this.http.put<OrdemServico>(url,os);
  }

// funçao para ser usada no componente OrdemServico-finaliza-servico
  finalizaServico2(os:OSFinalizaServico):Observable<OSFinalizaServico>{
    const url = this.baseUrl + "/ordem_servicos/finalizar-servico/" + os.id;
    return this.http.put<OSFinalizaServico>(url,os);
  }

  //funcao para receber mensagem ao salvar fornecedor
  message(msg:String):void{
      this.snack.open(`${msg}`,'OK',{
      horizontalPosition:'end',
      verticalPosition:'top',
      duration:5000
    })
  }
}
