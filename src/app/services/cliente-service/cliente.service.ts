import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: String = environment.baseUrlApi;

  constructor(private http : HttpClient,private snack:MatSnackBar) {

  }

  // funçao para retornar todos os clientes do banco de dados
  findAll():Observable<Cliente[]>{
    const url = this.baseUrl + "/clientes";
    return this.http.get<Cliente[]>(url);
  }

  //funçao para criar novo tecnico
  save(cliente:Cliente):Observable<Cliente>{
    const url = this.baseUrl + "/clientes";
    return this.http.post<Cliente>(url,cliente);
  }

  findById(id:any):Observable<Cliente>{
    const url = this.baseUrl + "/clientes/" + id;
    return this.http.get<Cliente>(url);
  }

  update(cliente:Cliente):Observable<Cliente>{
    const url = this.baseUrl + "/clientes/" + cliente.id;
    return this.http.put<Cliente>(url,cliente);
  }

  delete(id:any):Observable<void>{
    const url = this.baseUrl + "/clientes/" + id;
    return this.http.delete<void>(url)
  }


  //funcao para receber mensagem ao salvar cliente
  message(msg:String):void{
      this.snack.open(`${msg}`,'OK',{
      horizontalPosition:'end',
      verticalPosition:'top',
      duration:5000
    })
  }
}
