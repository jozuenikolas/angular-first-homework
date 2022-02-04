import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-container-personas',
  templateUrl: './container-personas.component.html',
  styleUrls: ['./container-personas.component.scss']
})
export class ContainerPersonasComponent implements OnInit {

  sidebarMainElements = [
    {name:"Cuentas", path: "/personas/cuentas", iconClass: "fas fa-laptop"},
    {name:"Tarjetas", path: "/personas/tarjetas", iconClass: "fas fa-credit-card"},
    {name:"Creditos", path: "/personas/creditos", iconClass: "fas fa-dollar-sign"},
    {name:"Inversiones", path: "/personas/inversiones", iconClass: ""},
    {name:"Servicios", path: "/personas/servicios", iconClass: ""},
    {name:"Usuarios", path: "/personas/usuarios", iconClass: "fas fa-users"}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
