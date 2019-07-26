import { Component } from '@angular/core';
//import { ServicioService } from 'src/app/servicio.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( public navCtrl: NavController) {}

}
