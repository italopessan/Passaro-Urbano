import { Api } from './api';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  private Api = Api;

  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${this.Api}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getCategorias(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${this.Api}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertaId(id: number): Promise<Oferta> {
    return this.http.get(`${this.Api}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        //console.log(resposta);
        return resposta
      });
  }

  public getComoUsar(id: number): Promise<string> {
    return this.http.get(`${this.Api}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) =>
        resposta[0].descricao);

  };

  public ondeFica(id: number): Promise<string> {
    return this.http.get(`${this.Api}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) =>
        resposta[0].descricao);

  };

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${this.Api}/ofertas?descricao_oferta_like=${termo}`)
    .pipe(map((resposta: any) => resposta,retry(10)))
    
  };
}

