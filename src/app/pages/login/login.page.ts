import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  error_messages={
    'password': [
      {type: 'reqired', message: 'Se requiere contraseña' },
      {type: 'minlength', message:'Debe contener al menos 8 caracteres.'},
      {type: 'maxlength', message:'Debe contener menos de 30 caracteres.'},
      {type: 'pattern', message: 'La contraseña debe contener numeros, mayusculas o minusculas'}
    ],
    'Usuario': [
      {type: 'reqired', message: 'Se requiere nombre de usuario' },
      {type: 'minlength', message:'Debe contener al menos 8 caracteres.'},
      {type: 'maxlength', message:'Debe contener menos de 20 caracteres.'},
      {type: 'pattern', message: 'El nombre de usuario debe contener numeros, mayusculas o minusculas'}
    ]
  }

  constructor(private formBuilder: FormBuilder) 
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

}