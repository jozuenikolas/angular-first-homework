import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { MainPersonasComponent } from './components/main-personas/main-personas.component';


@NgModule({
  declarations: [
    MainPersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }
