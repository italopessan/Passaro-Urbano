import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../Ofertas.service';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

public ofertas: Oferta[];

 constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getCategorias('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
  }
}


