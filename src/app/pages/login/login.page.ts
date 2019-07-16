import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {AuthService}from '../../providers/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  user = {
    name:'admin123',
    pw:'admin123'
  };

  error_messages={
    'password': [
      {type: 'reqired', message: 'Se requiere contraseña' },
      {type: 'minlength', message:'Debe contener al menos 8 caracteres.'},
      {type: 'maxlength', message:'Debe contener menos de 30 caracteres.'},
      {type: 'pattern', message: 'La contraseña debe contener numeros, mayusculas o minusculas'}
    ],
    'usuario': [
      {type: 'reqired', message: 'Se requiere nombre de usuario' },
      {type: 'minlength', message:'Debe contener al menos 8 caracteres.'},
      {type: 'maxlength', message:'Debe contener menos de 20 caracteres.'},
      {type: 'pattern', message: 'El nombre de usuario debe contener numeros, mayusculas o minusculas'}
    ],
  }

  constructor(private formBuilder: FormBuilder, private router: Router,private service: AuthService, private alertCtrl: AlertController) 
  { 
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z)(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      usuario:new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z)(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    });
  }

  ngOnInit() {
  }

  loginUser(){
    this.service.login(this.user.name, this.user.pw).then (success =>{
      if (success) {
        this.router.navigateByUrl('/menu/entrega');
      }else{
        this.presentAlert();
      } 
    });
  }

  async presentAlert () {
    const alert = await this.alertCtrl.create({
      header: 'Inicio de sesión fallido',
      message: 'Verifica tus credenciales',
      buttons: ['Listo']
    });
    await alert.present();
  }
}