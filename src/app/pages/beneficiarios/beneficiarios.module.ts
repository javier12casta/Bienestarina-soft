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
