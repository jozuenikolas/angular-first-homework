import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ChronometerComponent } from './shared/componets/chronometer/chronometer.component';
import { HomeModule } from './home/home.module';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    //ChronometerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    //HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
