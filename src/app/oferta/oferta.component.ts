import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../Ofertas.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {


  public oferta: Oferta;


  constructor(private route: ActivatedRoute,
    private OfertasService: OfertasService) { }

  ngOnInit() {
    this.OfertasService.getOfertaId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        //console.log(this.oferta)
      })
  }
}

