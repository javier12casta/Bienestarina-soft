import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuariosPage } from './usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosPage
  },
  {
    path: 'datos-generales-usuario', 
    loadChildren: '../datos-generales-usuario/datos-generales-usuario.module#DatosGeneralesUsuarioPageModule'
  },
  {
    path: 'usuarioy-roles', 
    loadChildren: '../usuarioy-roles/usuarioy-roles.module#UsuarioyRolesPageModule'
  },
  {
    path: 'datos-contacto-usuario',
    loadChildren: '../datos-contacto-usuario/datos-contacto-usuario.module#DatosContactoUsuarioPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuariosPage]
})
export class UsuariosPageModule {}
