import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from "../shared/shared.module";
import { MainHomeComponent } from './components/main-home/main-home.component';


@NgModule({
  declarations: [
    MainHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
