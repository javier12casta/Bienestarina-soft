import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import {Rol} from './interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  api ='http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log("hello service");
   }
   Obtenerdatos(){
     const path = `${this.api}/rol`; 
    return this.http.get<Rol[]>(path);
    console.log('Datos');
   }

   insertarRol(rol: Rol){
    const path = `${this.api}/RolInsert`; 
     return this.http.post<Rol>(path, rol);
   }
}
