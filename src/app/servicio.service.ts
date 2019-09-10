import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { Rol } from './interfaces/rol';
import { Barrio } from './interfaces/barrio';
import { Comuna } from './interfaces/comuna';
import { Municipio } from './interfaces/municipio';
import { Centrozonal } from './interfaces/centrozonal';
import { Regional } from './interfaces/regional';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  api = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log("hello service");
  }
//------rol Persona--------
// metodo get de rolPersona
  Obtenerdatos() {
    const path = `${this.api}/rol`;
    return this.http.get<Rol[]>(path);
  }
//metodo post de rolPersona
  insertarRol(rol: Rol) {
    const path = `${this.api}/RolInsert`;
    return this.http.post<Rol>(path, rol);
  }
//metodo put de rolPersona
  Actualizar(rol: Rol) {
    const path = `${this.api}/RolUpdate/${rol.idRolPersona}`;
    return this.http.put<Rol>(path, rol);
  }
//-----Barrio Vereda------
getBarrio(){
  const path = `${this.api}/BV`;
  return this.http.get<Barrio[]>(path);
}

postBarrio(bv: Barrio){
  const path = `${this.api}/BVInsert`;
  return this.http.post<Barrio>(path, bv);
}
putBarrio(bv: Barrio) {
  const path = `${this.api}/BVUpdate/${bv.idBarriosVeredas}`;
  return this.http.put<Barrio>(path, bv);
}
//-----comunas------
getComuna(){
  const path = `${this.api}/Comunas`;
  return this.http.get<[Comuna]>(path);
}

postComuna(comu: Comuna){
  const path = `${this.api}/ComunasInsert`;
  return this.http.post<Comuna>(path, comu);
}
putComuna(comu: Comuna) {
  const path = `${this.api}/ComunasUpdate/${comu.idComunas}`;
  return this.http.put<Comuna>(path, comu);
}
//------Municipio---------
getMunicipio(){
  const path = `${this.api}/Municipios`;
  return this.http.get<[Municipio]>(path);
}

postMunicipio(muni: Municipio){
  const path = `${this.api}/MunicipioInsert`;
  return this.http.post<Municipio>(path, muni);
}
putMunicipio(muni: Municipio) {
  const path = `${this.api}/MunicipioUpdate/${muni.idMunicipios}`;
  return this.http.put<Municipio>(path, muni);
}
//---- Centro Zonal ------
getCentro(){
  const path = `${this.api}/centrosZ`;
  return this.http.get<[Centrozonal]>(path);
}

postCentro(cen: Centrozonal){
  const path = `${this.api}/CZInsert`;
  return this.http.post<Centrozonal>(path, cen);
}
putCentro(cen: Centrozonal) {
  const path = `${this.api}/CZUpdate/${cen.idCentrosZonales}`;
  return this.http.put<Centrozonal>(path, cen);
}
//---- Regional ----
getRegional(){
  const path = `${this.api}/Regional`;
  return this.http.get<[Regional]>(path);
}

postRegional(regi: Regional){
  const path = `${this.api}/RegionalInsert`;
  return this.http.post<Regional>(path, regi);
}
putRegional(regi: Regional) {
  const path = `${this.api}/RegionalUpdate/${regi.idRegional}`;
  return this.http.put<Regional>(path, regi);
}
}
