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
  

  centros: Centrozonal[] = [];
  
  constructor( 
    private service : ServicioService,
    private menuCtrl: MenuController, 
    private loadingCtrl: LoadingController
    ) { }

  

       //consultar Datos
   async ngOnInit() {
    this.service.getCentro()
      .subscribe(async (data) => {
        this.centros = data;
        console.log(data);
        console.log('funciona');
      }
      );
  }
}
