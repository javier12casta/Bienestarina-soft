import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListasDatosMaestroPage } from './listas-datos-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: ListasDatosMaestroPage
  },
  {
    path: 'lista-maestros-bienestarina',
     loadChildren: '../lista-maestros-bienestarina/lista-maestros-bienestarina.module#ListaMaestrosBienestarinaPageModule'
  },
  {
    path: 'listado-precios', 
    loadChildren: '../listado-precios/listado-precios.module#ListadoPreciosPageModule' 
  }


];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListasDatosMaestroPage]
})
export class ListasDatosMaestroPageModule {}
