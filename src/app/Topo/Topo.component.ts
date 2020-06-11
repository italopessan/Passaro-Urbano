import { Oferta } from './../shared/oferta.model';
import { OfertasService } from 'src/app/Ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Topo',
  templateUrl: './Topo.component.html',
  styleUrls: ['./Topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro status: ', erro.status),
      () => console.log('Fluxo de eventos completo!'))
  }
}
