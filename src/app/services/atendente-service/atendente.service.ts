import { Atendente } from './../../models/Atendente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AtendenteService {

  baseUrlApi: String = environment.baseUrlApi;

  constructor(private http : HttpClient,private snack:MatSnackBar) {}

  // funçao para retornar todos os atendentes do banco de dados
  findAll():Observable<Atendente[]>{
    const url = this.baseUrlApi + "/atendentes";
    return this.http.get<Atendente[]>(url);
  }

  findById(id:any):Observable<Atendente>{
    const url = this.baseUrlApi + "/atendentes/" + id;
    return this.http.get<Atendente>(url);
  }

  //funçao para criar novo atendente
  save(atendente:Atendente):Observable<Atendente>{
    const url = this.baseUrlApi + "/atendentes";
    return this.http.post<Atendente>(url,atendente);
  }

  update(atendente:Atendente):Observable<Atendente>{
    const url = this.baseUrlApi + "/atendentes/" + atendente.id;
    return this.http.put<Atendente>(url,atendente);
  }

  delete(id:any):Observable<void>{
    const url = this.baseUrlApi + "/atendentes/" + id;
    return this.http.delete<void>(url)
  }

   //funcao para receber mensagem 
   message(msg:String):void{
    this.snack.open(`${msg}`,'OK',{
    horizontalPosition:'end',
    verticalPosition:'top',
    duration:5000
  })
}

}
