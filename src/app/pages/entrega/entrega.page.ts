import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {

  constructor(private menuCtrl: MenuController , private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  openMenu(){

this.menuCtrl.toggle();

  }

  async finish() {
    const loading = await this.loadingCtrl.create({
      message: 'Se han registrado  asociados al primer nivel',
      duration: 2000
    });
    await loading.present();
    return loading;
  }

}
