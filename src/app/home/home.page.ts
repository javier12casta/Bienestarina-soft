import { Component } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any;

  constructor( public navCtrl: NavController,
    public userService: ServicioService) {}

    ionViewDidLoad(){
      this.userService.getUsers()
       .subscribe(
        (data) => { // Success
          this.users = data['results'];
        },
        (error) =>{
          console.error(error);
        }
      )
    }


}
