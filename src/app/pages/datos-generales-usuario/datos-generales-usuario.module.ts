import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatosGeneralesUsuarioPage } from './datos-generales-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DatosGeneralesUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatosGeneralesUsuarioPage]
})
export class DatosGeneralesUsuarioPageModule {}
