import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbserviceService } from './services/dbservice.service';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'exploracion',
    redirectTo: 'exploracion',
    pathMatch: 'full'
  },
  
  {
    path: 'reproductor',
    redirectTo: 'reproductor',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'exploracion',
    loadChildren: () => import('./exploracion/exploracion.module').then( m => m.ExploracionPageModule)
  },
  {
    path: 'reproductor',
    loadChildren: () => import('./reproductor/reproductor.module').then( m => m.ReproductorPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },

  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
