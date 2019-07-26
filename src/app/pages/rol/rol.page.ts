import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {
  usuarios: Object;
  constructor( private Service: ServicioService) { }

  ionViewDidLoad(){
    this.Service.Obtenerdatos()
     .subscribe(
      (data) => { this.usuarios = data; 
        console.log(data);
        console.log('funciona');
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
