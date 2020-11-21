import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialidadService } from './service/especialidad/especialidad.service';
import { MedicoService } from './service/medico/medico.service';
import { PacienteService } from './service/paciente/paciente.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EspecialidadService,
    MedicoService,
    PacienteService
  ]
})
export class CoreModule { }
