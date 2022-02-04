import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { ContainerPersonasComponent } from './components/container-personas/container-personas.component';
import { CuentasPersonasComponent } from './components/cuentas-personas/cuentas-personas.component';
import { TarjetasPersonasComponent } from './components/tarjetas-personas/tarjetas-personas.component';
import { CreditosPersonasComponent } from './components/creditos-personas/creditos-personas.component';
import {SharedModule} from "../shared/shared.module";
import { UsuariosPersonasComponent } from './components/usuarios-personas/usuarios-personas.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContainerPersonasComponent,
    CuentasPersonasComponent,
    TarjetasPersonasComponent,
    CreditosPersonasComponent,
    UsuariosPersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PersonasModule { }
