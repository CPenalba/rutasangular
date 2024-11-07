import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingProvider, routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NumeroDobleComponent } from './components/numero-doble/numero-doble.component';
import { TablaMultiplicarRoutingComponent } from './components/tabla-multiplicar-routing/tabla-multiplicar-routing.component';
import { MenuTablaComponentComponent } from './components/menu-tabla-component/menu-tabla-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent,
    NumeroDobleComponent,
    TablaMultiplicarRoutingComponent,
    MenuTablaComponentComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
