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

  regionales: Regional = {

    Regional: ''

  };

  constructor(
    private Service: ServicioService,
    private toastCtrl: ToastController,
  ) { }
  ngOnInit() {
  }


      //insertar Datos
      insertDatos(Regional: string) {
        console.log("push");

       this.Service.postRegional(this.regionales).subscribe(res => {
          console.log(this.regionales);
       },
         err => 
       {
        console.log(err);
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
