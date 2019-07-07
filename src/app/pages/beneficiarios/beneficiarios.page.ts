import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.page.html',
  styleUrls: ['./beneficiarios.page.scss'],
})
export class BeneficiariosPage implements OnInit {
  listado;

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(public navCtrl: NavController) { 

  
 // http.get("http://localhost/micrudtutoapp/src/api/productos.php?opcion=1").subscribe(snap => {
  // console.log(snap);
  //  this.listado = snap;
 //  });
  }
}


