import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BeneficiariosPage } from './beneficiarios.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiariosPage
  },
  {
    path: 'datos-contacto-beneficiario', 
    loadChildren: '../datos-contacto-beneficiario/datos-contacto-beneficiario.module#DatosContactoBeneficiarioPageModule'
  },
  {

    path: 'acudiente-beneficiario', 
    loadChildren: '../acudiente-beneficiario/acudiente-beneficiario.module#AcudienteBeneficiarioPageModule'

  },{

    path: 'datos-generales-beneficiario', 
    loadChildren: '../datos-generales-beneficiario/datos-generales-beneficiario.module#DatosGeneralesBeneficiarioPageModule'

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BeneficiariosPage]
})
export class BeneficiariosPageModule {}
