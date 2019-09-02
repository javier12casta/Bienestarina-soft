import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatosContactoUsuarioPage } from './datos-contacto-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DatosContactoUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatosContactoUsuarioPage]
})
export class DatosContactoUsuarioPageModule {}
