import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/Produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  // URL DA API BACK-END
  baseUrl:String = environment.baseUrlApi;

  constructor(private http : HttpClient,private snack:MatSnackBar) { }

}
