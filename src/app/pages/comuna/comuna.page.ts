import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Comuna } from 'src/app/interfaces/comuna';

@Component({
  selector: 'app-comuna',
  templateUrl: './comuna.page.html',
  styleUrls: ['./comuna.page.scss'],
})
export class ComunaPage implements OnInit {

  comuna: Comuna = {

    Comunas:"comuna 2",
    Municipios_idMunicipios: 5,
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

  public RegistrarComuna(){

    this.Service.postComuna(this.comuna).subscribe(
    
      res => console.log(res),
      err => console.log(err)
    
    );
    
    this.presentToast('comuna Creado');
      }

}
