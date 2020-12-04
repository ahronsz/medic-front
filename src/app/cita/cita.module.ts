import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CitaRoutingModule } from './cita-routing.module';
import { ListarComponent } from './listar/listar.component';
import { VerComponent } from './ver/ver.component';
import { FiltersComponent } from './filters/filters.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrarComponent } from './registrar/registrar.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ListarComponent,
    VerComponent,
    FiltersComponent,
    LayoutComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CitaModule { }
