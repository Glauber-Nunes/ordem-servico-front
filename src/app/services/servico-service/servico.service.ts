import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Servico } from 'src/app/models/Servico';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

// URL DA API BACK-END
baseUrl:String = environment.baseUrlApi;

constructor(private http : HttpClient,private snack:MatSnackBar) { }

 // funçao para retornar todos os produtos do banco de dados
 findAll():Observable<Servico[]>{
  const url = this.baseUrl + "/servicos";
  return this.http.get<Servico[]>(url);
}

  //funçao para criar novo serviço
  save(servico:Servico):Observable<Servico>{
    const url = this.baseUrl + '/servicos';
    return this.http.post<Servico>(url,servico);
  }

  delete(id:any):Observable<void>{
    const url = this.baseUrl + "/servicos/" + id;
    return this.http.delete<void>(url)
  }

  findById(id:any):Observable<Servico>{
    const url = this.baseUrl + "/servicos/" + id;
    return this.http.get<Servico>(url);
  }

  update(servico:Servico):Observable<Servico>{
    const url = this.baseUrl + "/servicos/" + servico.id;
    return this.http.put<Servico>(url,servico);
  }

 //funcao para receber mensagem ao salvar servicos
 message(msg:String):void{
  this.snack.open(`${msg}`,'OK',{
  horizontalPosition:'end',
  verticalPosition:'top',
  duration:5000
})
}
}
