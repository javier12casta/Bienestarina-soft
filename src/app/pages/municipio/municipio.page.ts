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
  usuarios: Municipio[] = [];
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
    this.Service.getMunicipio()
      .subscribe(async (data) => {
        this.usuarios = data;
        console.log(data);
        await loading.dismiss();
      }
      );
  }
    //insertar Datos
    insertDatos(Municipio: string, CentrosZonales_idCentrosZonales: number) {
      const Municipio1 = {
        //variables iguales a la interface
        Municipio,
        CentrosZonales_idCentrosZonales,
      };
      this.Service.postMunicipio(Municipio1).subscribe((newMunicipio) => {
        this.usuarios.push(newMunicipio);
        this.presentToast('Municipio Creado');
      });
    }
    // ventana para crear rol
    async openAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Crear un nuevo Municipio',
        inputs: [
          {
            name: 'Municipio',
            type: 'text',
            placeholder: 'Nombre Municipio',
          },
          {
            name: 'CentrosZonales_idCentrosZonales',
            type: 'number',
            placeholder: `Centro Zonal`,
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
              this.insertDatos(data.Municipio, data.CentrosZonales_idCentrosZonales);
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
