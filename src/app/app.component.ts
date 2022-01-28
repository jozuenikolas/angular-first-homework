import {Component, ViewChild} from '@angular/core';
import {ChronometerComponent} from "./shared/components/chronometer/chronometer.component";

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
    this.logCounter.unshift(log)
  }

  mostrarConsola(value:string){
    console.log(value)
  }

  @ViewChild('chronometerFirst') ctrFirst:ChronometerComponent
  @ViewChild('chronometerSecond') ctrSecond:ChronometerComponent
  iniciarCrono(){
    this.ctrFirst.startCounter()
    this.ctrSecond.startCounter()
  }

}
