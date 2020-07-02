import { Oferta } from './../shared/oferta.model';
import { OfertasService } from 'src/app/Ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'
import { of } from 'rxjs';




@Component({
  selector: 'app-Topo',
  templateUrl: './Topo.component.html',
  styleUrls: ['./Topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subejctPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subejctPesquisa //retorno Oferta[]
      .pipe(debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log('http')

        if(termo.trim() == ''){
          //retornar um obsrvable de array vazio
          return of<Oferta[]>([]); 
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }))
      catchError((error: any) => {
          console.log(error)
          return of<Oferta[]>([]); 
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => console.log('ofertas',ofertas))
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('Key up',termoDaBusca)
    this.subejctPesquisa.next(termoDaBusca)
  }
}
