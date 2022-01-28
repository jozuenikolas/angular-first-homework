import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {ChronometerComponent} from "./components/chronometer/chronometer.component";
import { CardComponent } from './components/card/card.component';
import { ButtonLoadingDirective } from './directives/button-loading.directive';

const exportComponents =[
  ChronometerComponent,
  CardComponent,
  ButtonLoadingDirective
]


@NgModule({
  declarations: [
    ... exportComponents,
    //ButtonComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: exportComponents
})
export class SharedModule { }
