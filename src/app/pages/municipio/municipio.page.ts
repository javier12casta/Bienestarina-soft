import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Municipio } from 'src/app/interfaces/municipio';
import { Regional } from 'src/app/interfaces/regional';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.page.html',
  styleUrls: ['./municipio.page.scss'],
})
export class MunicipioPage implements OnInit {
  
  municipio: Municipio [] = [];
  regionales: Regional [] = [];

  constructor(
    private Service: ServicioService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

 
  async ngOnInit() {
    
    this.Service.getMunicipio()
      .subscribe(async (data) => {
        this.municipio = data;
        console.log(data);
        console.log('funciona');
      }
      );
  }

  getRegional(){
    this.Service.getRegional().subscribe(res =>{
      this.regionales = res;
    },err=>{
      console.log(err)
    });
  }
    
      //mensajes
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }
 
}
