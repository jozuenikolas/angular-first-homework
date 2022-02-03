import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainEmpresasComponent} from "./components/main-empresas/main-empresas.component";

const routes: Routes = [
  {path: '', component:  MainEmpresasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
