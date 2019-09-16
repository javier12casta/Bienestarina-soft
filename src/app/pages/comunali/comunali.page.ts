import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ToastController } from '@ionic/angular';
import { Comuna } from '../../interfaces/comuna';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-comunali',
  templateUrl: './comunali.page.html',
  styleUrls: ['./comunali.page.scss'],
})
export class ComunaliPage implements OnInit {

  comunas: Comuna = {
    idComunas : 0,
    Comunas:'',
    Municipios_idMunicipios: 0,

  };

  modificar: boolean = false;

  constructor(private Service: ServicioService,
    private toastCtrl: ToastController,
    private activeRoute: ActivatedRoute,) { }

  //Traer los Datos a los campos
  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getComunaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.comunas = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
  }

  //insertar Datos
  insertDatos(Regional: string) {
    delete this.comunas.idComunas;

    this.Service.postComuna(this.comunas).subscribe(res => {
      console.log(this.comunas);
    },
      err => {
        console.log(err);
      });

  }
  // Actualizar Datos
  updateDatos(){
    this.Service.putComuna(this.comunas.idComunas, this.comunas)
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
