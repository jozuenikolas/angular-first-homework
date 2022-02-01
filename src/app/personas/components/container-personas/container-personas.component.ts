import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-container-personas',
  templateUrl: './container-personas.component.html',
  styleUrls: ['./container-personas.component.scss']
})
export class ContainerPersonasComponent implements OnInit {

  sidebarMainElements = [
    {name:"Cuentas", path: "/personas/cuentas"},
    {name:"Tarjetas", path: "/personas/tarjetas"},
    {name:"Creditos", path: "/personas/creditos"},
    {name:"Inversiones", path: "/personas/inversiones"},
    {name:"Servicios", path: "/personas/servicios"},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
