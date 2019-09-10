import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Regional } from 'src/app/interfaces/regional';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.page.html',
  styleUrls: ['./regional.page.scss'],
})
export class RegionalPage implements OnInit {
  usuarios: Regional[] = [];

  region : Regional = {

    Regional: "",
  
  }
  constructor(
    private Service: ServicioService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  //consultar Datos
  async ngOnInit() {
    
  }
   

      //mensajes
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }
 

public RegistrarRegional(){

this.Service.postRegional(this.region).subscribe(

  res => console.log(res),
  err => console.log(err)
);

this.presentToast('Regional Creado');

}


}
