import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Centrozonal } from '../interfaces/centrozonal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User; 
  centroz : Centrozonal;
  API_URI ='http://localhost:3000/centrosZ';


  constructor(private http : HttpClient) { }

  login (name: string, pw: string) : Promise<boolean>{
    return new Promise((resolve, reject) =>{
      if(name === 'admin123' && pw ==='admin123'){
        this.currentUser = {
          name: name,
          rol: 1,
        };
        resolve(true);
      } else if(name === 'user12345' && pw ==='user12345'){
        this.currentUser = {
          name: name,
          rol: 2,
        };
        resolve(true);
      }else {
        resolve(false);
      }
    });
  }


  isLogedIn(){
    return this.currentUser !=null;
  }

  logout(){
    this.currentUser = null;
  }

  isAdmin(){
    return this.currentUser.rol == 1;
  }


}
