import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario'

@Component({
  selector: 'app-usuarios-personas',
  templateUrl: './usuarios-personas.component.html',
  styleUrls: ['./usuarios-personas.component.scss']
})
export class UsuariosPersonasComponent implements OnInit {

  search:string = ""

  users:Usuario[] = [
    {
      id: 1,
      firstName: "nicolas",
      lastName: "arias",
      salary: 100,
      email: "nicolas.arias@test.com",
      percentage: 0.5
    },
    {
      id: 2,
      firstName: "Milena",
      lastName: "Ortiz",
      salary: 200,
      email: "milena.ortiz@test.com",
      percentage: 0.5
    },
    {
      id: 3,
      firstName: "Emmily",
      lastName: "Traslaviña",
      salary: 300,
      email: "emmily.traslavina@test.com",
      percentage: 0.5
    },
    {
      id: 4,
      firstName: "Kevin",
      lastName: "Kaarl",
      salary: 400,
      email: "kevin.kaarl@test.com",
      percentage: 0.5
    },
    {
      id: 5,
      firstName: "Ed",
      lastName: "Maverick",
      salary: 500,
      email: "ed.maverick@test.com",
      percentage: 0.5
    },
    {
      id: 6,
      firstName: "Sofía",
      lastName: "Gonzalez",
      salary: 600,
      email: "sofia.gonzalez@test.com",
      percentage: 0.5
    },
    {
      id: 7,
      firstName: "Valeria",
      lastName: "Morales",
      salary: 700,
      email: "valeria.morales@test.com",
      percentage: 0.5
    },
    {
      id: 8,
      firstName: "David",
      lastName: "Molina",
      salary: 800,
      email: "david.molina@test.com",
      percentage: 0.5
    },
    {
      id: 9,
      firstName: "Josue",
      lastName: "Arias",
      salary: 900,
      email: "josue.arias@test.com",
      percentage: 0.5
    },
    {
      id: 10,
      firstName: "Esperanza",
      lastName: "Gomez",
      salary: 1000,
      email: "esperanza.gomez@test.com",
      percentage: 0.5
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
