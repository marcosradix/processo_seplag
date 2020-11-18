
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Setor } from '../models/setor.model';


@Injectable({
  providedIn: 'root'
})
export class SetorService {

   private readonly PATH: string = '/setores';

   constructor(private http: HttpClient) { }
  
  carregarsetores(): Observable<Array<Setor>> {
    return this.http.get<Array<Setor>>(`${environment.urlApi}${this.PATH}`);
  }

    carregarSetor(id:String): Observable<Setor> {
    return this.http.get<Setor>(`${environment.urlApi}${this.PATH}/${id}`);
  }

    carregarSetorListOne(id:String): Observable<Array<Setor>> {
      let setores: Array<Setor> = [];
    this.http.get<Setor>(`${environment.urlApi}${this.PATH}/${id}`).subscribe(data =>{
        setores.push(data);
    });
    return of(setores);
  }

    salvarSetor(Setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(`${environment.urlApi}${this.PATH}`, Setor);
  }

  atualizarSetor(id:String,Setor: Setor): Observable<Setor> {
    return this.http.put<Setor>(`${environment.urlApi}${this.PATH}/${id}`,Setor);
  }
}
