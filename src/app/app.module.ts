import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { TopoComponent } from './Topo/Topo.component';
import { RodapeComponent } from './Rodape/Rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import {ROUTES} from './app.route'
import { OfertaComponent } from './oferta/oferta.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      TopoComponent,
      RodapeComponent,
      RestaurantesComponent,
      DiversaoComponent,
      OfertaComponent,
      ComoUsarComponent,
      OndeFicaComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(ROUTES)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
