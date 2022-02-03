import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-empresas',
  templateUrl: './main-empresas.component.html',
  styleUrls: ['./main-empresas.component.scss']
})
export class MainEmpresasComponent implements OnInit {


  currentTabId: string = "CUE"

  tabElements = [
    {id: "CUE", name: "Cuentas", isActive: true},
    {id: "CRE", name: "Créditos", isActive: false},
    {id: "INV", name: "Inversiones", isActive: false},
    {id: "SER", name: "Servicios", isActive: false}
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

  onClickElementTab(elementId: string) {
    this.currentTabId = elementId
    this.tabElements.forEach((element) => {
      element.isActive = element.id == elementId ? true : false
    })
  }

}
