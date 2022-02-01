import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPersonasComponent} from "./components/main-personas/main-personas.component";

const routes: Routes = [
  {path: '', component: MainPersonasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
