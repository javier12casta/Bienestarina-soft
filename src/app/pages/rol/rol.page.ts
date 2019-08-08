import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Rol } from 'src/app/interfaces/rol';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {
  usuarios: Rol[] = [];
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
    this.Service.Obtenerdatos()
      .subscribe(async (data) => {
        this.usuarios = data;
        console.log(data);
        console.log('funciona');
        await loading.dismiss();
      }
      );
  }
  //insertar Datos
  insertDatos(RolPersona: string, Estado: number) {
    const Rol1 = {
      //variables iguales a la interface
      RolPersona,
      Estado,
    };
    this.Service.insertarRol(Rol1).subscribe((newRol) => {
      this.usuarios.push(newRol);
      this.presentToast('Rol Creado');
    });
  }
  // ventana para crear rol
  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Crear un nuevo rol',
      inputs: [
        {
          name: 'RolPersona',
          type: 'text',
          placeholder: 'Tipo de Rol',
        },
        {
          name: 'Estado',
          type: 'number',
          placeholder: `Estado 1 Activo, 0 Inactivo`,
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
            this.insertDatos(data.RolPersona, data.Estado);
            console.log(data);
          },
        }
      ]
    });
    await alert.present();
  }
  //metodo actualizar datos
  actualizarDatos(idRolPersona: number, RolPersona: string, Estado: number) {
    const Rol1 = {
      idRolPersona,
      RolPersona,
      Estado,
    };
    this.Service.Actualizar(Rol1).subscribe((newRol) => {
      this.usuarios.push(newRol);//lo pone al final del vector
    });
  }
  //ventana de actualizar datos, esta es la ventan de actualiza aca se cargan los daots de la base
  async openAlert1() {
    const alert = await this.alertCtrl.create({
      header: 'Actualizar un rol',
      inputs: [
        {
          name: 'RolPersona',
          type: 'text',
          placeholder: 'Tipo de Rol',
        },
        {
          name: 'Estado',
          type: 'number',
          placeholder: `Estado 1 Activo, 0 Inactivo`,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Actualizar',
          handler: (data) => {             
            this.actualizarDatos(data.id, data.RolPersona, data.Estado);
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
