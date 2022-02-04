import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CuentasPersonasComponent} from "./components/cuentas-personas/cuentas-personas.component";
import {TarjetasPersonasComponent} from "./components/tarjetas-personas/tarjetas-personas.component";
import {CreditosPersonasComponent} from "./components/creditos-personas/creditos-personas.component";
import {UsuariosPersonasComponent} from "./components/usuarios-personas/usuarios-personas.component";

const routes: Routes = [
  {path: 'cuentas', component: CuentasPersonasComponent},
  {path: 'tarjetas', component: TarjetasPersonasComponent},
  {path: 'creditos', component: CreditosPersonasComponent},
  {path: 'usuarios', component: UsuariosPersonasComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
