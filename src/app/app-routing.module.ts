import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  //{ path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  //{ path: 'entrega', loadChildren: './pages/entrega/entrega.module#EntregaPageModule' },
  //{ path: 'inventario', loadChildren: './pages/inventario/inventario.module#InventarioPageModule' },
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
 // { path: 'listado-precios', loadChildren: './pages/listado-precios/listado-precios.module#ListadoPreciosPageModule' },

 // { path: 'lista-maestros-bienestarina', loadChildren: './pages/lista-maestros-bienestarina/lista-maestros-bienestarina.module#ListaMaestrosBienestarinaPageModule' },

//  { path: 'datos-generales-beneficiario', loadChildren: './pages/datos-generales-beneficiario/datos-generales-beneficiario.module#DatosGeneralesBeneficiarioPageModule' },

 // { path: 'listas-datos-maestro', loadChildren: './pages/listas-datos-maestro/listas-datos-maestro.module#ListasDatosMaestroPageModule' },

 // { path: 'acudiente-beneficiario', loadChildren: './pages/acudiente-beneficiario/acudiente-beneficiario.module#AcudienteBeneficiarioPageModule' },
  //{ path: 'datos-contacto-beneficiario', loadChildren: './pages/datos-contacto-beneficiario/datos-contacto-beneficiario.module#DatosContactoBeneficiarioPageModule' },
 // { path: 'datos-generales-usuario', loadChildren: './pages/datos-generales-usuario/datos-generales-usuario.module#DatosGeneralesUsuarioPageModule' },
 // { path: 'usuarioy-roles', loadChildren: './pages/usuarioy-roles/usuarioy-roles.module#UsuarioyRolesPageModule' },
//  { path: 'datos-contacto-usuario', loadChildren: './pages/datos-contacto-usuario/datos-contacto-usuario.module#DatosContactoUsuarioPageModule' },

  //{ path: 'reportes', loadChildren: './pages/reportes/reportes.module#ReportesPageModule' },

 // { path: 'uds', loadChildren: './pages/uds/uds.module#UdsPageModule' },

  


  //{ path: 'regional', loadChildren: './pages/regional/regional.module#RegionalPageModule' },
  //{ path: 'centrozonal', loadChildren: './pages/centrozonal/centrozonal.module#CentrozonalPageModule' },
  //{ path: 'municipio', loadChildren: './pages/municipio/municipio.module#MunicipioPageModule' },
  //{ path: 'comuna', loadChildren: './pages/comuna/comuna.module#ComunaPageModule' },
  //{ path: 'barrio', loadChildren: './pages/barrio/barrio.module#BarrioPageModule' },
  //{ path: 'beneficiarios', loadChildren: './pages/beneficiarios/beneficiarios.module#BeneficiariosPageModule' },
  //{ path: 'rol', loadChildren: './pages/rol/rol.module#RolPageModule' },
  //{ path: 'acudientes', loadChildren: './pages/acudientes/acudientes.module#AcudientesPageModule' },
  //{ path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
