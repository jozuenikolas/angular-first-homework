import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {ChronometerComponent} from "./components/chronometer/chronometer.component";
import { CardComponent } from './components/card/card.component';
import { ButtonLoadingDirective } from './directives/button-loading.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArchonRedirectDirective } from './directives/archon-redirect.directive';

const exportComponents =[
  ChronometerComponent,
  CardComponent,
  ButtonLoadingDirective,
  NavbarComponent,
  SidebarComponent,
  ArchonRedirectDirective,
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
