import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/interfaces/regional';
import { Municipio } from 'src/app/interfaces/municipio';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-municipioi',
  templateUrl: './municipioi.page.html',
  styleUrls: ['./municipioi.page.scss'],
})
export class MunicipioiPage implements OnInit {

  municipios: Municipio = {
    idMunicipios: 0,
    Municipio: '',
    idRegional: 0,
  };

  regionales: Regional [] = [];

  modificar: boolean = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService
    
  ) { }

    //Traer los Datos a los campos
    ngOnInit() {
      const params = this.activeRoute.snapshot.params;
      console.log(params);
      if (params.id) {
        this.Service.getMunicipioid(params.id)
          .subscribe(res => {
            console.log(res);
            this.municipios = Object(res);
            this.modificar = true;
          }, err => {
            console.log(err);
          }
          );
      }
      this.Service.getRegional().subscribe(res => {
        this.regionales = res;
      },
      err => {
        console.log(err);
      });
    }
  
    //insertar Datos
    insertDatos(Municipio: string) {
      delete this.municipios.idMunicipios;
  
      this.Service.postMunicipio(this.municipios).subscribe(res => {
        console.log(this.municipios);
      },
        err => {
          console.log(err);
        });
  
    }
    // Actualizar Datos
    updateDatos(){
      this.Service.putMunicipio(this.municipios.idMunicipios, this.municipios)
      .subscribe(
        res => {
          console.log(this.municipios);
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
    }
  

}
