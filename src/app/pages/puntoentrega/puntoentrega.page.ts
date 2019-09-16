import { Component, OnInit } from '@angular/core';
import {Puntoentrega} from 'src/app/interfaces/puntoentrega';
import {ServicioService} from 'src/app/servicio.service';

@Component({
  selector: 'app-puntoentrega',
  templateUrl: './puntoentrega.page.html',
  styleUrls: ['./puntoentrega.page.scss'],
})
export class PuntoentregaPage implements OnInit {
 

  puntos: Puntoentrega[] = [];
  
  constructor( 
    private service : ServicioService,

    ) { }

  

       //consultar Datos
   async ngOnInit() {
    this.service.getPunto()
      .subscribe(async (data) => {
        this.puntos = data;
        console.log(data);
        console.log('funciona');
      }
      );
  }

}
