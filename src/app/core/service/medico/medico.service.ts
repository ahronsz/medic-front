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

  allMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${environment.url_api}medico/listar`);
  }

  allMedicosxEsp(codesp: string): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${environment.url_api}medico/especialidad/${codesp}`);
  }
}
