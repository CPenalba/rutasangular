import { CineComponent } from './components/cine/cine.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';

//necesitamos una serie de modulos que se encuentran dentro de angular para la navegacion de rutas
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//necesitamos un array con las rutas, dicho array sera del tipo routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cine', component: CineComponent },
  { path: 'musica', component: MusicaComponent },
];

//desde esta clase debemos exportar el array de rutas como proveedor
export const appRoutingProvider: any[] = [];
//las rutas en si mismas
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
