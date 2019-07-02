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
        {title: 'Beneficiarios', url: '/menu/beneficiarios', name:'contacts'}
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
