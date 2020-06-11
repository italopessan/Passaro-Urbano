import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.ofertaService.ondeFica(this.route.parent.snapshot.params['id'])
      .then((resposta: string) => {
        this.ondeFica = resposta
        //console.log(this.comoUsar)
      })
  }
}
