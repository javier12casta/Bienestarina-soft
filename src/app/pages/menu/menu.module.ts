import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { IonicModule, NavController } from '@ionic/angular';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'entrega',
        loadChildren: '../entrega/entrega.module#EntregaPageModule'
      },
      {
        path: 'inventario',
        loadChildren: '../inventario/inventario.module#InventarioPageModule'
      },
      {
        path: 'beneficiarios',
        loadChildren: '../beneficiarios/beneficiarios.module#BeneficiariosPageModule'
      },
      {
        path: 'rol',
        loadChildren: '../rol/rol.module#RolPageModule'
      },
      {
        path: 'acudientes',
        loadChildren: '../acudientes/acudientes.module#AcudientesPageModule'
      },
      {
        path: 'usuarios',
        loadChildren: '../usuarios/usuarios.module#UsuariosPageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/entrega'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {

  usuarios

constructor(public navCtrl: NavController , public auth:AuthService){

}

ionViewDidLoad(){

  this.auth.Obtenerdatos()
  .subscribe(
    (data)=>{this.usuarios = data;},
    (error)=>{console.log(error);}
    
    )

} 

 }
