import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/Ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametro: Params) => {
      this.ofertaService.ondeFica(parametro.id)
        .then((resposta: string) => {
          this.ondeFica = resposta
          //console.log(this.comoUsar)
        })
    })
  }
}
