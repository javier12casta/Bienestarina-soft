import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  constructor(public http: HttpClient) {
    console.log("hello service");
   }
   Obtenerdatos(){
    //return this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.get('http://localhost:3000/rol');
    console.log('Datos');
   }
}
