import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaMaestrosBienestarinaPage } from './lista-maestros-bienestarina.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMaestrosBienestarinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaMaestrosBienestarinaPage]
})
export class ListaMaestrosBienestarinaPageModule {}
