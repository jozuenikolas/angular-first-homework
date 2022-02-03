import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { MainEmpresasComponent } from './components/main-empresas/main-empresas.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MainEmpresasComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    SharedModule
  ]
})
export class EmpresasModule { }
