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
    ReactiveFormsModule
  ]
})
export class CitaModule { }
