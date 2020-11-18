import { Tramite } from './../models/tramite.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Beneficio } from '../models/beneficio.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

   private readonly PATH: string = '/beneficios';

   constructor(private http: HttpClient) { }
  
  carregarBeneficios(): Observable<Array<Beneficio>> {
    return this.http.get<Array<Beneficio>>(`${environment.urlApi}${this.PATH}`);
  }

carregarTramites(id:String): Observable<Array<Tramite>> {
    return this.http.get<Array<Tramite>>(`${environment.urlApi}${this.PATH}/${id}`);
  }

    carregarBeneficio(id:String): Observable<Beneficio> {
    return this.http.get<Beneficio>(`${environment.urlApi}${this.PATH}/${id}`);
  }

    salvarBeneficio(beneficio: Beneficio): Observable<Beneficio> {
    return this.http.post<Beneficio>(`${environment.urlApi}${this.PATH}`, beneficio);
  }

  atualizarBeneficio(id:String,beneficio: Beneficio): Observable<Beneficio> {
    return this.http.put<Beneficio>(`${environment.urlApi}${this.PATH}/${id}`,beneficio);
  }
}
