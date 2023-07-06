import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl: String = environment.baseUrlApi;

  constructor(private http : HttpClient,private snack:MatSnackBar) { }

  // funçao para retornar todos os fornecedores do banco de dados
  findAll():Observable<Fornecedor[]>{
    const url = this.baseUrl + "/fornecedores";
    return this.http.get<Fornecedor[]>(url);
  }

  findById(id:any):Observable<Fornecedor>{
    const url = this.baseUrl + "/fornecedores/" + id;
    return this.http.get<Fornecedor>(url);
  }

  update(fornecedor:Fornecedor):Observable<Fornecedor>{
    const url = this.baseUrl + "/fornecedores/" + fornecedor.id;
    return this.http.put<Fornecedor>(url,fornecedor);
  }

  delete(id:any):Observable<void>{
    const url = this.baseUrl + "/fornecedores/" + id;
    return this.http.delete<void>(url)
  }

   //funçao para criar novo fornecedor
   save(fornecedor:Fornecedor):Observable<Fornecedor>{
    const url = this.baseUrl + "/fornecedores";
    return this.http.post<Fornecedor>(url,fornecedor);
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
