import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;  

  constructor() { }

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
