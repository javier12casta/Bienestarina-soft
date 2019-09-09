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

public insert(req: Request , res: Response ){



}

public delete(req: Request , res: Response ){


}

config():void{


}



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
    insertDatos(NombreCentroZonal: string,
      idMunicipios: number,
      idComunas: number,
      idBarriosVeredas: number,
      CodigoExternoJcz: string,
      CodigoExternoCZ: number,
      Estado: number,
      idRegional: number) {
      const Centrozonal1= {
        //variables iguales a la interface
        NombreCentroZonal,
        idMunicipios,
        idComunas,
        idBarriosVeredas,
        CodigoExternoJcz,
        CodigoExternoCZ,
        Estado,
        idRegional
      };
      this.Service.postCentro(Centrozonal1).subscribe((newCentrozonal) => {
        this.usuarios.push(newCentrozonal);
        this.presentToast('Centro Zonal Creado');
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
  //animacion carga
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      duration: 2000
    });
    await loading.present();
    return loading;
  }

  async finish() {
    const loading = await this.loadingCtrl.create({
      message: 'Se han registrado  de primer nivel',
      duration: 2000
    });
    await loading.present();
    return loading;
  }


   


}
