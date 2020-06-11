import { OfertasService } from './../Ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //this.ofertas=this.ofertasService.getOfertas();
    //console.log(this.ofertas)
    this.ofertasService.getOfertas()
      .then(
        (ofertas: Oferta[]) => { this.ofertas = ofertas },
        )
      .catch((param: any) => { console.log(param) })
  }
}
