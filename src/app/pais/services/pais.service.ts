import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.eu/rest/v2";


  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  bucarCapital(termino: string): Observable<Country[]> {
    const urlCapital = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(urlCapital, { params: this.httpParams });
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const urlPorAlpha = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(urlPorAlpha);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const urlPorRegion = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(urlPorRegion, { params: this.httpParams });
  }
}
