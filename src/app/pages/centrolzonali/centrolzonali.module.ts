import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CentrolzonaliPage } from './centrolzonali.page';

const routes: Routes = [
  {
    path: '',
    component: CentrolzonaliPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CentrolzonaliPage]
})
export class CentrolzonaliPageModule {}
