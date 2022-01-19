import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-homework';
  greeting = 'Hola Nicolás';
  logCounter:string[] = [];

  insertLogCounter(log:string){
    this.logCounter.push(log)
  }

  cleanLogCounter(log:string){
    this.logCounter = []
  }

}
