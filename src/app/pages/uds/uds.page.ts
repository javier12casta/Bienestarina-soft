import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-uds',
  templateUrl: './uds.page.html',
  styleUrls: ['./uds.page.scss'],
})
export class UdsPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async finish() {
    const loading = await this.loadingCtrl.create({
      message: 'registros asociados al segundo nivel',
      duration: 2000
    });
    await loading.present();
    return loading;
  }


}
