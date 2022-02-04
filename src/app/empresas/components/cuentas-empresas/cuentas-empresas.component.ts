import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentas-empresas',
  templateUrl: './cuentas-empresas.component.html',
  styleUrls: ['./cuentas-empresas.component.scss']
})
export class CuentasEmpresasComponent implements OnInit {

  cuentasEmpresasDetails = [
    {
      title: "corriente",
      srcImage: "https://inicio.pichincha.com/portal/Portals/0/adam/Submenu/e0eP7K5IZkiCSPKBFhU65w/Icon/EMPRESAS---CUENTAS-Corriente-.jpg?w=300&h=200&mode=crop",
      content: "Tu empresa necesita una herramienta financiera eficiente.",
      btnName: "Conoce más",
      btnRoute: "#"
    },
    {
      title: "miami",
      srcImage: "https://inicio.pichincha.com/portal/Portals/0/adam/Submenu/nViXxbmhmUO1ddFptI2zmw/Icon/EMPRESAS---CUENTAS-Miami.jpg?w=300&h=200&mode=crop",
      content: "Tu cuenta en el exterior solicítala en Banco Pichincha Miami.",
      btnName: "Conoce más",
      btnRoute: "#"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
