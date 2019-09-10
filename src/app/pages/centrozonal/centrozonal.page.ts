import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { AlertController, ToastController, LoadingController, MenuController } from '@ionic/angular';
import { Centrozonal } from 'src/app/interfaces/centrozonal';


@Component({
  selector: 'app-centrozonal',
  templateUrl: './centrozonal.page.html',
  styleUrls: ['./centrozonal.page.scss'],
})
export class CentrozonalPage implements OnInit{
  
centroz : Centrozonal = {

  idCentrosZonales : 0,
    NombreCentroZonal: "ff",
    idMunicipios: 5,
    idComunas: 3,
    idBarriosVeredas: 1,
    CodigoExternoJcz: "vv",
    CodigoExternoCZ: 56,
    Estado: 1,
    idRegional: 1,

}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  usuarios: Centrozonal[] = [];
  
  constructor( private services : ServicioService , private menuCtrl: MenuController , private loadingCtrl: LoadingController) { }

  
insertCentroZonal(){

this.services.postCentro(this.centroz).subscribe(
  
  res => console.log(res),
  err => console.log(err)
  
  );

  this.finish();
  
}

async finish() {
  const loading = await this.loadingCtrl.create({
    message: 'Se han registrado  asociados al primer nivel',
    duration: 2000
  });
  await loading.present();
  return loading;
}

}
