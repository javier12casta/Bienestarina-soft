import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Municipio } from 'src/app/interfaces/municipio';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.page.html',
  styleUrls: ['./municipio.page.scss'],
})
export class MunicipioPage implements OnInit {
  
  municipio: Municipio = {
    Municipio: "DE",
    idRegional: 1,
  }


  constructor(
    private Service: ServicioService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

 
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
 

  public RegistrarMunicipio(){

this.Service.postMunicipio(this.municipio).subscribe(

  res => console.log(res),
  err => console.log(err)

);

this.presentToast('municipio Creado');
  }



}
