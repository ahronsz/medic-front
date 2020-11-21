import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { Especialidad } from '../../../model/especialidad.model';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private http: HttpClient) { }

  allEspecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(`${environment.url_api}especialidad/listar`);
  }
}
