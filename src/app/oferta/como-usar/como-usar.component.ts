import { OfertasService } from './../../Ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametro: Params) => {
      this.ofertaService.getComoUsar(parametro.id)
        .then((resposta: string) => {
          this.comoUsar = resposta
          //console.log(this.comoUsar)
        })
    })
  }
}
