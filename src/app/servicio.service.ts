import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Rol } from './interfaces/rol';
import { Barrio } from './interfaces/barrio';
import { Comuna } from './interfaces/comuna';
import { Municipio } from './interfaces/municipio';
import { Centrozonal } from './interfaces/centrozonal';
import { Regional } from './interfaces/regional';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  api = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log("hello service");
  }
//------rol Persona--------
// metodo get de roles
  Obtenerdatos() {
    const path = `${this.api}/rol`;
    return this.http.get<Rol[]>(path);
  }
// metodo get de rol
  getRol(rol: Rol) {
    return this.http.get(`${this.api}/rol/${rol.idRolPersona}`);
  }
//metodo post de rolPersona
  insertarRol(rol: Rol) {
    const path = `${this.api}/rol`;
    return this.http.post<Rol>(path, rol);
  }
//metodo put de rolPersona
  Actualizar(rol: Rol) {
    const path = `${this.api}/rol/${rol.idRolPersona}`;
    return this.http.put<Rol>(path, rol);
  }
//-----Barrio Vereda------
getBarrio(){
  const path = `${this.api}/barrio`;
  return this.http.get<Barrio[]>(path);
}

postBarrio(bv: Barrio){
  const path = `${this.api}/barrio`;
  return this.http.post<Barrio>(path, bv);
}
putBarrio(bv: Barrio) {
  const path = `${this.api}/barrio/${bv.idBarriosVeredas}`;
  return this.http.put<Barrio>(path, bv);
}
//-----comunas------
getComuna(){
  const path = `${this.api}/comuna`;
  return this.http.get<[Comuna]>(path);
}

postComuna(comu: Comuna){
  const path = `${this.api}/comuna`;
  return this.http.post<Comuna>(path, comu);
}
putComuna(comu: Comuna) {
  const path = `${this.api}/comuna/${comu.idComunas}`;
  return this.http.put<Comuna>(path, comu);
}
//------Municipio---------
getMunicipio(){
  const path = `${this.api}/municipio`;
  return this.http.get<[Municipio]>(path);
}
//---Metodo traer por id
getMunicipioid(id: string) {
  return this.http.get(`${this.api}/municipio/${id}`);
}
postMunicipio(muni: Municipio){
  const path = `${this.api}/municipio`;
  return this.http.post<Municipio>(path, muni);
}
putMunicipio(id: string|number, muni: Municipio) {
  const path = `${this.api}/municipio/${id}`;
  return this.http.put<Municipio>(path, muni);
}
//---- Centro Zonal ------
getCentro(){
  const path = `${this.api}/centroZ`;
  return this.http.get<[Centrozonal]>(path);
}

postCentro(cen: Centrozonal){
  const path = `${this.api}/centroZ`;
  return this.http.post<Centrozonal>(path, cen);
}
putCentro(cen: Centrozonal) {
  const path = `${this.api}/centroZ/${cen.idCentrosZonales}`;
  return this.http.put<Centrozonal>(path, cen);
}
//---- Regional Metodos funcionando--------------------------------------------------------------
getRegional(){
  const path = `${this.api}/regional`;
  return this.http.get<[Regional]>(path);
}
//---Metodo traer por id
getRegionalid(id: string) {
  return this.http.get(`${this.api}/regional/${id}`);
}
//----Metodo Crear Regionales
postRegional(regi: Regional){
  const path = `${this.api}/regional`;
  return this.http.post<Regional>(path, regi);
}
//Metodo Actualizar Regionales
putRegional(id: string|number, regi: Regional ){
  return this.http.put<Regional>(`${this.api}/regional/${id}`, regi);
}

}
