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
  usuarios: Comuna[] = [];
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
    this.Service.getComuna()
      .subscribe(async (data) => {
        this.usuarios = data;
        console.log(data);
        console.log('funciona');
        await loading.dismiss();
      }
      );
  }
    //insertar Datos
    insertDatos(Comunas: string, Municipios_idMunicipios: number) {
      const Comuna1 = {
        //variables iguales a la interface
        Comunas,
        Municipios_idMunicipios,
      };
      this.Service.postComuna(Comuna1).subscribe((newComuna) => {
        this.usuarios.push(newComuna);
        this.presentToast('Comuna Creada');
      });
    }
    // ventana para crear rol
    async openAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Crear una nueva comuna',
        inputs: [
          {
            name: 'Comunas',
            type: 'text',
            placeholder: 'Nombre comuna',
          },
          {
            name: 'Municipios_idMunicipios',
            type: 'number',
            placeholder: `Municipio`,
          },
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
              this.insertDatos(data.Comunas, data.Municipios_idMunicipios);
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
