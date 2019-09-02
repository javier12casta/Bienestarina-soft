import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioyRolesPage } from './usuarioy-roles.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioyRolesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioyRolesPage]
})
export class UsuarioyRolesPageModule {}
