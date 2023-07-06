import { Tecnico } from './../../models/Tecnico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TecnicoServiceService {

 // URL DA API BACK-END
baseUrl:String = environment.baseUrlApi;

constructor(private http : HttpClient,private snack:MatSnackBar) { }

 // funçao para retornar todos os produtos do banco de dados
 findAll():Observable<Tecnico[]>{
  const url = this.baseUrl + "/tecnicos";
  return this.http.get<Tecnico[]>(url);
}

  //funçao para criar novo tecnico
  save(tecnico:Tecnico):Observable<Tecnico>{
    const url = this.baseUrl + '/tecnicos';
    return this.http.post<Tecnico>(url,tecnico);
  }

  delete(id:any):Observable<void>{
    const url = this.baseUrl + "/tecnicos/" + id;
    return this.http.delete<void>(url)
  }

  findById(id:any):Observable<Tecnico>{
    const url = this.baseUrl + "/tecnicos/" + id;
    return this.http.get<Tecnico>(url);
  }

  update(tecnico:Tecnico):Observable<Tecnico>{
    const url = this.baseUrl + "/tecnicos/" + tecnico.id;
    return this.http.put<Tecnico>(url,tecnico);
  }

 //funcao para receber mensagem ao salvar tecnicos
 message(msg:String):void{
  this.snack.open(`${msg}`,'OK',{
  horizontalPosition:'end',
  verticalPosition:'top',
  duration:5000
})
}
}
