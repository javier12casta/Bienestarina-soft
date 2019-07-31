import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Barrio } from 'src/app/interfaces/barrio';
@Component({
  selector: 'app-barrio',
  templateUrl: './barrio.page.html',
  styleUrls: ['./barrio.page.scss'],
})
export class BarrioPage implements OnInit {
  usuarios: Barrio[] = [];
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
    this.Service.getBarrio()
      .subscribe(async (data) => {
        this.usuarios = data;
        console.log(data);
        console.log('funciona');
        await loading.dismiss();
      }
      );
  }
    //insertar Datos
    insertDatos(BarriosVeredas: string, Comunas_idComunas: number) {
      const Barrio1 = {
        //variables iguales a la interface
        BarriosVeredas,
        Comunas_idComunas,
      };
      this.Service.postBarrio(Barrio1).subscribe((newBarrio) => {
        this.usuarios.push(newBarrio);
        this.presentToast('Barrio o vereda Creado');
      });
    }
    // ventana para crear rol
    async openAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Crear un nuevo Barrio',
        inputs: [
          {
            name: 'BarriosVeredas',
            type: 'text',
            placeholder: 'Nombre Barrio o vereda',
          },
          {
            name: 'Comunas_idComunas',
            type: 'number',
            placeholder: `Comuna`,
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
              this.insertDatos(data.BarriosVeredas, data.Comunas_idComunas);
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
