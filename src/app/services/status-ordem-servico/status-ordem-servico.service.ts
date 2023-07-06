import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { StatusOrdemServico } from 'src/app/models/StatusOrdemServico';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusOrdemServicoService {

   // URL DA API BACK-END
baseUrl:String = environment.baseUrlApi;

constructor(private http : HttpClient,private snack:MatSnackBar) { }

 // funçao para retornar todos os  do banco de dados
 findAll():Observable<StatusOrdemServico[]>{
  const url = this.baseUrl + "/status-ordens";
  return this.http.get<StatusOrdemServico[]>(url);
}


findById(id:any):Observable<StatusOrdemServico>{
  const url = this.baseUrl + "/status-ordens/" + id;
  return this.http.get<StatusOrdemServico>(url);
}

update(status:StatusOrdemServico):Observable<StatusOrdemServico>{
  const url = this.baseUrl + "/status-ordens/" + status.id;
  return this.http.put<StatusOrdemServico>(url,status);
}
}
