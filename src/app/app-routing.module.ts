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
