import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //{ path: '', redirectTo: 'menu', pathMatch: 'full' },
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  //{ path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  //{ path: 'entrega', loadChildren: './pages/entrega/entrega.module#EntregaPageModule' },
  //{ path: 'inventario', loadChildren: './pages/inventario/inventario.module#InventarioPageModule' },
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
