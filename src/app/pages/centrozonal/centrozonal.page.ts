import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Centrozonal } from 'src/app/interfaces/centrozonal';

@Component({
  selector: 'app-centrozonal',
  templateUrl: './centrozonal.page.html',
  styleUrls: ['./centrozonal.page.scss'],
})
export class CentrozonalPage implements OnInit {
  usuarios: Centrozonal[] = [];
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
    this.Service.getCentro()
      .subscribe(async (data) => {
        this.usuarios = data;
        console.log(data);
        console.log('funciona');
        await loading.dismiss();
      }
      );
  }
    //insertar Datos
    insertDatos(CentrosZonales: string, Regional_idRegional: number, CodigoJerarquiaCZ: string, CodigoCZ: number , EstadoDatoMaestro : string) {
      const Centrozonal1= {
        //variables iguales a la interface
        CentrosZonales,
        Regional_idRegional,
        CodigoJerarquiaCZ,
        CodigoCZ,
        EstadoDatoMaestro,
      };
      this.Service.postCentro(Centrozonal1).subscribe((newCentrozonal) => {
        this.usuarios.push(newCentrozonal);
        this.presentToast('Centro Zonal Creado');
      });
    }
    // ventana para crear rol
    async datosprimernivel() {
      const alert = await this.alertCtrl.create({
        header: 'Crear un nuevo Centro Zonal',
        inputs: [
          {
            name: 'CentrosZonales',
            type: 'text',
            placeholder: 'Nombre Centro Zonal',
          },
          {
            name: 'Regional_idRegional',
            type: 'number',
            placeholder: `Regional`,
          },
          {
            name: 'CodigoJerarquiaCZ',
            type: 'text',
            placeholder: 'Codigo Jerarquia',
          },
          {
            name: 'CodigoCZ',
            type: 'number',
            placeholder: `Codigo`,
          },
          {
            name: 'Estado del dato maestro',
            type: 'text',
            placeholder: `Estado del dato maestro`,
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
              this.insertDatos(data.CentrosZonales, data.Regional_idRegional,data.CodigoJerarquiaCZ,data.CodigoCZ,data.EstadoDatoMaestro);
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
