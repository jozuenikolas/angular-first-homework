import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnInit {
  @Input()minutes: number = 20
  @Input()seconds: number = 2
  interval:any
  @Output() evtClick: EventEmitter<string> = new EventEmitter<string>()
  indexLogs:number = 1

  constructor() { }

  ngOnInit(): void {

  }

  startCounter(){
    this.interval = setInterval(() => {
      if(this.seconds == 60){
        this.seconds = 0
        this.minutes = this.minutes + 1
      }
      this.seconds = this.seconds + 1
    },1000);
  }

  pauseCounter(){
    clearInterval(this.interval)
  }

  stopCounter(){
    clearInterval(this.interval)
    this.minutes = 0
    this.seconds = 0
  }

  logCounter(){
    let minutos:string
    let segundos:string
    if(this.minutes <=9){
      minutos = `0${this.minutes}`
    } else{
      minutos=`${this.minutes}`
    }
    if(this.seconds <=9){
      segundos = `0${this.seconds}`
    } else{
      segundos=`${this.seconds}`
    }
    this.evtClick.emit(`${this.indexLogs}. ${minutos}:${segundos}`)
    this.indexLogs+=1
  }

}
