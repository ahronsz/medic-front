import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../main/layout/layout.component';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'cita',
        redirectTo: 'registrar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'registrar',
        component: RegistrarComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CitaRoutingModule { }
