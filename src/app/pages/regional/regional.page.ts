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
  constructor(
    private Service: ServicioService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  //consultar Datos
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.Service.getRegional()
      .subscribe(async (data) => {
        this.usuarios = data;
        console.log(data);
        console.log('funciona');
        await loading.dismiss();
      }
      );
  }
    //insertar Datos
    insertDatos(Regional: string) {
      const Regional1 = {
        //variables iguales a la interface
        Regional,
      };
      this.Service.postRegional(Regional1).subscribe((newRegional) => {
        this.usuarios.push(newRegional);
        this.presentToast('Regional Creado');
      });
    }
    // ventana para crear rol
    async openAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Crear un nuevo Regional',
        inputs: [
          {
            name: 'Regional',
            type: 'text',
            placeholder: 'Nombre Regional',
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
          },
          {
            text: 'Crear',
            handler: (data) => {
              this.insertDatos(data.Regional);
              console.log(data);
            },
          }
        ]
      });
      await alert.present();
    }

      //mensajes
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }
  //animacion carga
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      duration: 2000
    });
    await loading.present();
    return loading;
  }
}
