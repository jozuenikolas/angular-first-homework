import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-personas',
  templateUrl: './usuarios-personas.component.html',
  styleUrls: ['./usuarios-personas.component.scss']
})
export class UsuariosPersonasComponent implements OnInit {

  search:string = ""

  usuarios:any = [
    {
      id: 1,
      nombre: "nicolas",
      apellido: "arias",
      salario: 100,
      correo: "nicolas.arias@test.com",
      porcentaje: 0.5
    },
    {
      id: 2,
      nombre: "Milena",
      apellido: "Ortiz",
      salario: 200,
      correo: "milena.ortiz@test.com",
      porcentaje: 0.5
    },
    {
      id: 3,
      nombre: "Emmily",
      apellido: "Traslaviña",
      salario: 300,
      correo: "emmily.traslavina@test.com",
      porcentaje: 0.5
    },
    {
      id: 4,
      nombre: "Kevin",
      apellido: "Kaarl",
      salario: 400,
      correo: "kevin.kaarl@test.com",
      porcentaje: 0.5
    },
    {
      id: 5,
      nombre: "Ed",
      apellido: "Maverick",
      salario: 500,
      correo: "ed.maverick@test.com",
      porcentaje: 0.5
    },
    {
      id: 6,
      nombre: "Sofía",
      apellido: "Gonzalez",
      salario: 600,
      correo: "sofia.gonzalez@test.com",
      porcentaje: 0.5
    },
    {
      id: 7,
      nombre: "Valeria",
      apellido: "Morales",
      salario: 700,
      correo: "valeria.morales@test.com",
      porcentaje: 0.5
    },
    {
      id: 8,
      nombre: "David",
      apellido: "Molina",
      salario: 800,
      correo: "david.molina@test.com",
      porcentaje: 0.5
    },
    {
      id: 9,
      nombre: "Josue",
      apellido: "Arias",
      salario: 900,
      correo: "josue.arias@test.com",
      porcentaje: 0.5
    },
    {
      id: 10,
      nombre: "Esperanza",
      apellido: "Gomez",
      salario: 1000,
      correo: "esperanza.gomez@test.com",
      porcentaje: 0.5
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
