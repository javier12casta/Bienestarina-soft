import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatosGeneralesBeneficiarioPage } from './datos-generales-beneficiario.page';

const routes: Routes = [
  {
    path: '',
    component: DatosGeneralesBeneficiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatosGeneralesBeneficiarioPage]
})
export class DatosGeneralesBeneficiarioPageModule {}
