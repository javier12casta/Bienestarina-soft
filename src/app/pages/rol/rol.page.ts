import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import {AlertController} from '@ionic/angular';
import { Rol } from 'src/app/interfaces/rol';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {
  usuarios: Rol [] = [];
  constructor( private Service: ServicioService, private alertCtrl: AlertController) {

  }
  async openAlert () {
    const alert = await this.alertCtrl.create({
      header: 'Crear un nuevo rol',
      inputs:[
        {
          name: 'Rol',
          type: 'text',
          placeholder:'Tipo de Rol',
        },
        {
          name: 'Estado',
          type: 'number',
          placeholder:`Estado 1 Activo, 0 Inactivo`,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role:'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Crear',
          handler: (data) => {
          this.insertDatos(data.RolPersona, data.Estado);
          console.log(data);
          },
        }
      ]
    });
    await alert.present();
  }


  ngOnInit() {
  }
  //consultar Datos
  ionViewDidEnter(){

    this.Service.Obtenerdatos()
    .subscribe(
     (data) => { this.usuarios = data; 
       console.log(data);
       console.log('funciona');
     },
     (error) =>{
       console.log(error);
     }
   ) 

  }

  //insertar Datos
  insertDatos(RolPersona: string, Estado: number){
   const Rol1 = {
     //variables iguales a la interface
    RolPersona,
    Estado,
   };
   this.Service.insertarRol(Rol1).subscribe((newRol) =>{
    this.usuarios.push(newRol);
   });
  }
}
