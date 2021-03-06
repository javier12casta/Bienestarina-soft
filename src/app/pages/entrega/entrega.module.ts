import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
//import { AuthService } from '../../providers/auth.service';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { EntregaPage } from './entrega.page';

const routes: Routes = [
  {
    path: '',
    component: EntregaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntregaPage]
})
export class EntregaPageModule {

  constructor(public navCtrl: NavController){  }

}
