import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { Component } from '@angular/core';
import { OfertaComponent } from './oferta/oferta.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './Home/Home.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'restaurante', component: RestaurantesComponent },
    { path: 'oferta', component: OfertaComponent },
    { path: 'oferta/:id', component: OfertaComponent, children:[
        {path:'', component: ComoUsarComponent},
        {path:'como-usar', component: ComoUsarComponent},
        {path: 'onde-fica', component: OndeFicaComponent},
    ] },
];


