import { Component } from '@angular/core';
import {min} from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  imports: [],
  standalone: true,
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css'
})
export class StopwatchComponent {
  public hours: string = '00';
  public minutes: string = '00';
  public seconds: string = '00';
  public secondsSinceStart: number = 0;
  public interval: any;
  startWatch(): void{
    this.timeMaths();
    document.querySelector('.stop-watch')!.classList.remove("d-none");
    document.querySelector('.stop-watch')!.classList.add("d-inline-block");

    document.querySelector('.start-watch')!.classList.add("d-none");
    document.querySelector('.start-watch')!.classList.remove("d-inline-block");

    document.querySelector('.pause-watch')!.classList.add("d-inline-block");
    document.querySelector('.pause-watch')!.classList.remove("d-none");
  }
  resetWatch(){
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00'
  }
  stopWatch(): void {
    this.secondsSinceStart = 0;
    this.resetWatch();
    clearInterval(this.interval);
    document.querySelector('.stop-watch')!.classList.add("d-none");
    document.querySelector('.stop-watch')!.classList.remove("d-inline-block");

    document.querySelector('.start-watch')!.classList.remove("d-none");
    document.querySelector('.start-watch')!.classList.add("d-inline-block");

    document.querySelector(".pause-watch")!.classList.add("d-none");
    document.querySelector(".pause-watch")!.classList.remove('d-inline-block');
    document.querySelector(".restart-watch")!.classList.add("d-none");
    document.querySelector(".restart-watch")!.classList.remove('d-inline-block');
  }
  timeMaths(): void{
    this.interval = setInterval(() => {
      this.updateWatch();
    }, 1000);
  }
  updateWatch(){
    this.secondsSinceStart++;
    this.seconds = (this.secondsSinceStart % 60).toString().length <= 1? '0'+(this.secondsSinceStart % 60).toString() : (this.secondsSinceStart % 60).toString();

    let mins: number = (this.secondsSinceStart - parseInt(this.seconds))/60 %  60;
    this.minutes = mins < 10? '0'+mins.toString() : mins.toString();

    let hours: number = (this.secondsSinceStart - parseInt(this.minutes)*60 - parseInt(this.seconds))/3600;
    this.hours = hours < 10? '0'+hours.toString() : hours.toString();

    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }
  pauseWatch(): void{
    clearInterval(this.interval);
    document.querySelector(".pause-watch")!.classList.add("d-none");
    document.querySelector(".pause-watch")!.classList.remove('d-inline-block');

    document.querySelector(".restart-watch")!.classList.add("d-inline-block");
    document.querySelector(".restart-watch")!.classList.remove('d-none');
  }
  restartWatch(): void{
    document.querySelector(".restart-watch")!.classList.add("d-none");
    document.querySelector(".restart-watch")!.classList.remove('d-inline-block');

    document.querySelector(".pause-watch")!.classList.add("d-inline-block");
    document.querySelector(".pause-watch")!.classList.remove('d-none');
    this.timeMaths();
  }
}
