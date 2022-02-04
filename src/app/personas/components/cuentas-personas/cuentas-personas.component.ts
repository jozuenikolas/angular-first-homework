import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentas-personas',
  templateUrl: './cuentas-personas.component.html',
  styleUrls: ['./cuentas-personas.component.scss']
})
export class CuentasPersonasComponent implements OnInit {


  cuentasPersonasDetails = [
    {
      title: "Ahorros",
      srcImage: "https://inicio.pichincha.com/portal/Portals/0/adam/Submenu/7WAvgisllUCIBv4F6fduZg/Icon/PERSONAS-CUENTAS-CORRIENTE-2.jpg?w=300&h=200&mode=crop",
      content: "Abre una cuenta en 10 minutos y empieza a manejar tu dinero donde sea que estés.",
      btnValue: "Conoce más"
    },
    {
      title: "Ahorro Programado",
      srcImage: "https://inicio.pichincha.com/portal/Portals/0/adam/Submenu/EfyqZV-vxEGAFGMFzSSChA/Icon/PERSONAS-CUENTAS-AHORRO-PROGRAMADO.jpg?w=300&h=200&mode=crop",
      content: "Cumple tus planes a futuro, con una cuota de ahorro mensual desde 10 dólares.",
      btnValue: "Conoce más"
    },
    {
      title: "Jóvenes",
      srcImage: "https://inicio.pichincha.com/portal/Portals/0/adam/Submenu/BCr9OQZmnUyzc_8VFv6E4w/Icon/Jovenes.jpg?w=300&h=200&mode=crop",
      content: "Descubre todas nuestras opciones para empezar a construir tu futuro.",
      btnValue: "Conoce más"
    },
    {
      title: "Cuenta Básica",
      srcImage: "https://inicio.pichincha.com/portal/Portals/0/adam/Submenu/iRnsHbN1I0yqz0hhnN3M-Q/Icon/PERSONAS-CUENTAS-CUENTA-BASICA.jpg?w=300&h=200&mode=crop",
      content: "Abre tu cuenta y maneja tu dinero desde cualquier corresponsal de la red Mi Vecino.",
      btnValue: "Conoce más"
    },
    {
      title: "Corriente",
      srcImage: "https://inicio.pichincha.com/portal/Portals/0/adam/Submenu/7WAvgisllUCIBv4F6fduZg/Icon/PERSONAS-CUENTAS-CORRIENTE-2.jpg?w=300&h=200&mode=crop",
      content: "Administra y controla tu dinero a través de cheques personales.",
      btnValue: "Conoce más"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
