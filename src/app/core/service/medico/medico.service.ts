import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { Medico } from '../../../model/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  allDoctoresxEsp(cod_esp: string): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${environment.url_api}medico/especialidad/${cod_esp}`);
  }
}
