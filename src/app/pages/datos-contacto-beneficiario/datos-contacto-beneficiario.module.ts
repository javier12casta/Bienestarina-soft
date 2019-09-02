import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatosContactoBeneficiarioPage } from './datos-contacto-beneficiario.page';

const routes: Routes = [
  {
    path: '',
    component: DatosContactoBeneficiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatosContactoBeneficiarioPage]
})
export class DatosContactoBeneficiarioPageModule {}
