import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { CuentasPersonasComponent } from './components/cuentas-personas/cuentas-personas.component';
import { ContainerPersonasComponent } from './components/container-personas/container-personas.component';
import { TarjetasPersonasComponent } from './components/tarjetas-personas/tarjetas-personas.component';
import { CreditosPersonasComponent } from './components/creditos-personas/creditos-personas.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CuentasPersonasComponent,
    ContainerPersonasComponent,
    TarjetasPersonasComponent,
    CreditosPersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    SharedModule
  ]
})
export class PersonasModule { }
