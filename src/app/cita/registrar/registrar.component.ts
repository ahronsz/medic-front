import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Especialidad } from '../../model/especialidad.model';
import { Medico } from '../../model/medico.model';
import { EspecialidadService } from '../../core/service/especialidad/especialidad.service';
import { MedicoService } from '../../core/service/medico/medico.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  especialidades: Especialidad[];
  medicos: Medico[];
  form: FormGroup;

  constructor(
    private especialidadService: EspecialidadService,
    private medicoService: MedicoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.builder();
    this.listEspecialidad();
    this.listDoctorxEsp();
  }

  private builder(): void {
    this.form = this.formBuilder.group({
      cod_pac: '',
      cod_mir: '',
      cod_sala: '',
      fecha: '',
      hora: ''
    });
  }

  listEspecialidad(): void {
    this.especialidadService.allEspecialidades().subscribe(result => {
      this.especialidades = result;
    });
  }

  listDoctorxEsp(): void {
    this.medicoService.allDoctoresxEsp('').subscribe(result => {
      this.medicos = result;
    });
  }
}
