import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

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
      idComunas: 2,
      idBarrioVeredas: 1,
      CodigoExternoJcz: '',
      CodigoExternoCZ: 56,
      Estado: 1,
      idRegional: 2,
  };

  modificar = false;
  constructor(
    private Service : ServicioService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getCentroid(params.id)
        .subscribe(res => {
          console.log(res);
          this.centros = Object(res);
          this.modificar = true;
        }, err => {
          console.log(err);
        }
        );
    }
  }


  //insertar Datos
  insertDatos(Centrozonal : string) {
    delete this.centros.idCentrosZonales;
    this.Service.postCentro(this.centros).subscribe(res => {
      console.log(this.centros);
      console.log(res);
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
