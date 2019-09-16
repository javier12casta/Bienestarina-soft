import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-centrolzonali',
  templateUrl: './centrolzonali.page.html',
  styleUrls: ['./centrolzonali.page.scss'],
})
export class CentrolzonaliPage implements OnInit {
  centros : Centrozonal = {

    idCentrosZonales : 0,
      NombreCentroZonal: '',
      idMunicipios: 5,
      idComunas: 3,
      idBarriosVeredas: 1,
      CodigoExternoJcz: '',
      CodigoExternoCZ: 56,
      Estado: 1,
      idRegional: 1,
  
  };

  modificar = false;
  constructor(
    private Service : ServicioService,
  ) { }

  ngOnInit() {
  }


  //insertar Datos
  insertDatos(centrozonal: string) {
    delete this.centros.idCentrosZonales;
    this.Service.postCentro(this.centros).subscribe(res => {
      console.log(this.centros);
    },
      err => {
        console.log(err);
      });

  }
  // Actualizar Datos
  updateDatos(){
    this.Service.putCentro(this.centros.idCentrosZonales, this.centros)
    .subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
  }
}
