import { Component, OnInit, HostBinding } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ToastController } from '@ionic/angular';
import { Regional } from '../../interfaces/regional';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-regionali',
  templateUrl: './regionali.page.html',
  styleUrls: ['./regionali.page.scss'],
})
export class RegionaliPage implements OnInit {

  //@HostBinding('class') classes = "row";

  regionales: Regional = {
    idRegional: 0,
    Regional: '',
  };

  modificar: boolean = false;
  constructor(
    private Service: ServicioService,
    private toastCtrl: ToastController,
    private activeRoute: ActivatedRoute,
  ) { }

  //Traer los Datos a los campos
  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getRegionalid(params.id)
        .subscribe(res => {
          console.log(res);
          this.regionales = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
  }

  //insertar Datos
  insertDatos(Regional: string) {
    delete this.regionales.idRegional;

    this.Service.postRegional(this.regionales).subscribe(res => {
      console.log(this.regionales);
    },
      err => {
        console.log(err);
      });

  }
  // Actualizar Datos
  updateDatos(){
    this.Service.putRegional(this.regionales.idRegional, this.regionales)
    .subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
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
