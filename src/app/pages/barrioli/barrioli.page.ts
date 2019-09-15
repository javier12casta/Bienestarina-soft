import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ToastController } from '@ionic/angular';
import { Barrio } from '../../interfaces/barrio';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-barrioli',
  templateUrl: './barrioli.page.html',
  styleUrls: ['./barrioli.page.scss'],
})
export class BarrioliPage implements OnInit {

  barrio: Barrio = {
    idBarriosVeredas: 0,
    BarriosVeredas: '',
    idComunas: 0,

  };

  modificar = false;
  constructor(private Service: ServicioService,
    private toastCtrl: ToastController,
    private activeRoute: ActivatedRoute,) { }

  //Traer los Datos a los campos
  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getBarrioid(params.id)
        .subscribe(res => {
          console.log(res);
          this.barrio = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
  }

  //insertar Datos
  insertDatos(Barrio: string) {
    delete this.barrio.idBarriosVeredas;

    this.Service.postBarrio(this.barrio).subscribe(res => {
      console.log(this.barrio);
    },
      err => {
        console.log(err);
      });
  }
  // Actualizar Datos
  updateDatos(){
    this.Service.putBarrio(this.barrio.idBarriosVeredas, this.barrio)
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
