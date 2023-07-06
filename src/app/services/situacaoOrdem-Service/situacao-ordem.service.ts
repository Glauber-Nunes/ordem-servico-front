import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SituacaoOrdem } from 'src/app/models/SituacaoOrdem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SituacaoOrdemService {

 // URL DA API BACK-END
baseUrl:String = environment.baseUrlApi;

constructor(private http : HttpClient,private snack:MatSnackBar) { }

 // funçao para retornar todos os  do banco de dados
 findAll():Observable<SituacaoOrdem[]>{
  const url = this.baseUrl + "/situacao-ordens";
  return this.http.get<SituacaoOrdem[]>(url);
}


findById(id:any):Observable<SituacaoOrdem>{
  const url = this.baseUrl + "/situacao-ordens/" + id;
  return this.http.get<SituacaoOrdem>(url);
}

update(situacao:SituacaoOrdem):Observable<SituacaoOrdem>{
  const url = this.baseUrl + "/situacao-ordens/" + situacao.id;
  return this.http.put<SituacaoOrdem>(url,situacao);
}

message(msg:String):void{
  this.snack.open(`${msg}`,'OK',{
  horizontalPosition:'end',
  verticalPosition:'top',
  duration:5000
})
}
}
