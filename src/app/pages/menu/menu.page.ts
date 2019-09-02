import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import {AuthService}from '../../providers/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  username = '';
  pages = [];
 

  selectedPath = '';

  constructor(private router: Router, private service: AuthService ) 
  {
    this.router.events.subscribe((event: RouterEvent)=>{
      this.selectedPath = event.url;
    });
  }

  ionViewWillEnter(){
    if (this.service.isAdmin()){
      this.pages = [
        { title: 'Inventario', url: '/menu/inventario', name:'cube' },
        { title: 'Entrega', url: '/menu/entrega', name:'clipboard' },
        {title: 'Beneficiarios', url: '/menu/beneficiarios', name:'contacts'},
        {title: 'Acudientes', url: '/menu/acudientes', name:'contacts'},
        {title: 'Rol', url: '/menu/rol', name:'contacts'},
        {title: 'Usuarios', url: '/menu/usuarios', name:'contacts'},
        {title: 'Barrios', url: '/menu/barrio', name:'globe'},
        {title: 'Comunas', url: '/menu/comuna', name:'globe'},
        {title: 'Municipios', url: '/menu/municipio', name:'globe'},
        {title: 'CentrosZonales', url: '/menu/centrozonal', name:'globe'},
        {title: 'Regionales', url: '/menu/regional', name:'globe'},
        {title: 'Uds', url: '/menu/uds', name:'globe'},
        {title: 'Reportes', url: '/menu/reportes', name:'globe'},
        {title: 'Listas Datos Maestros', url: '/menu/listas-datos-maestro', name:'globe'},
      ];
    } else {
      this.pages = [
        { title: 'Inventario', url: '/menu/inventario', name:'cube' },
        { title: 'Entrega', url: '/menu/entrega', name:'clipboard' }
      ];
    }
  }

  ngOnInit() {
  }

}
