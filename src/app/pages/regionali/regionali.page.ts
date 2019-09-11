import { Component, OnInit, HostBinding } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ToastController} from '@ionic/angular';
import { Regional } from '../../interfaces/regional';

@Component({
  selector: 'app-regionali',
  templateUrl: './regionali.page.html',
  styleUrls: ['./regionali.page.scss'],
})
export class RegionaliPage implements OnInit {

  //@HostBinding('class') classes = "row";

  regionales: Regional[] = [];
  constructor(
    private Service: ServicioService,
    private toastCtrl: ToastController,
  ) { }
  ngOnInit() {
  }


      //insertar Datos
      insertDatos(Regional: string) {
        const Regional1 = {
          //variables iguales a la interface
          Regional,
        };
        this.Service.postRegional(Regional1).subscribe((newRegional) => {
          this.regionales.push(newRegional);
          console.log(this.regionales);
          //this.presentToast('Regional Creado');
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
