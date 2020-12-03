import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { Cita, CitaDisponible } from '../../../model/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  registrar(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(`${environment.url_api}cita/save`, cita, {headers: this.httpHeaders});
  }

  listar(citaGet: any): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${environment.url_api}cita/dia`, {params: citaGet});
  }

  listarDisponible(citaGet: any): Observable<CitaDisponible> {
    console.log(citaGet);
    return this.http.get<CitaDisponible>(`${environment.url_api}cita/disponible`, {params: citaGet});
  }
}
