import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/Produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {
 
  // URL DA API BACK-END
  baseUrl:String = environment.baseUrlApi;

  constructor(private http : HttpClient,private snack:MatSnackBar) {
    
   }

   // funçao para retornar todos os produtos do banco de dados
   findAll():Observable<Produto[]>{
    const url = this.baseUrl + "/produtos";
    return this.http.get<Produto[]>(url);
  }

    //funçao para criar novo produto
    save(produto:Produto):Observable<Produto>{
      const url = this.baseUrl + '/produtos';
      return this.http.post<Produto>(url,produto);
    }

    findById(id:any):Observable<Produto>{
      const url = this.baseUrl + "/produtos/" + id;
      return this.http.get<Produto>(url);
    }
  
    update(produto:Produto):Observable<Produto>{
      const url = this.baseUrl + "/produtos/" + produto.id;
      return this.http.put<Produto>(url,produto);
    }

    delete(id:any):Observable<void>{
      const url = this.baseUrl + "/produtos/" + id;
      return this.http.delete<void>(url)
    }
  
   //funcao para receber mensagem ao salvar produto
   message(msg:String):void{
    this.snack.open(`${msg}`,'OK',{
    horizontalPosition:'end',
    verticalPosition:'top',
    duration:5000
  })
}
}
