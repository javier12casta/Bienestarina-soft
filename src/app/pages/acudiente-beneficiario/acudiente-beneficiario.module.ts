import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcudienteBeneficiarioPage } from './acudiente-beneficiario.page';

const routes: Routes = [
  {
    path: '',
    component: AcudienteBeneficiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcudienteBeneficiarioPage]
})
export class AcudienteBeneficiarioPageModule {}
