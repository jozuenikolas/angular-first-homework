import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { MainEmpresasComponent } from './components/main-empresas/main-empresas.component';
import {SharedModule} from "../shared/shared.module";
import { CuentasEmpresasComponent } from './components/cuentas-empresas/cuentas-empresas.component';
import { CreditosEmpresasComponent } from './components/creditos-empresas/creditos-empresas.component';
import { InversionesEmpresasComponent } from './components/inversiones-empresas/inversiones-empresas.component';
import { ServiciosEmpresasComponent } from './components/servicios-empresas/servicios-empresas.component';


@NgModule({
  declarations: [
    MainEmpresasComponent,
    CuentasEmpresasComponent,
    CreditosEmpresasComponent,
    InversionesEmpresasComponent,
    ServiciosEmpresasComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    SharedModule
  ]
})
export class EmpresasModule { }
