import { Tramite } from './../models/tramite.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

   private readonly PATH: string = '/tramites';


   constructor(private http: HttpClient) { }
  
  carregartramites(): Observable<Array<Tramite>> {
    return this.http.get<Array<Tramite>>(`${environment.urlApi}${this.PATH}`);
  }

    carregarTramite(id:String): Observable<Tramite> {
    return this.http.get<Tramite>(`${environment.urlApi}${this.PATH}/${id}`);
  }

    salvarTramite(Tramite: Tramite): Observable<Tramite> {
    return this.http.post<Tramite>(`${environment.urlApi}${this.PATH}`, Tramite);
  }

  atualizarTramite(id:String,Tramite: Tramite): Observable<Tramite> {
    return this.http.put<Tramite>(`${environment.urlApi}${this.PATH}/${id}`,Tramite);
  }
}
