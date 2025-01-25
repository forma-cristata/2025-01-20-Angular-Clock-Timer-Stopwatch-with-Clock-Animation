import {Component} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Event} from '@angular/router';
import {keyframes} from '@angular/animations';
import {tick} from '@angular/core/testing';

@Component({
  selector: 'app-timer',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

  // Start timer = initial time in seconds
  // timer-stopwatch = time left
  public hours: string = "00";
  public minutes: string = "00";
  public seconds: string = "00";
  public secondsSinceStart: number = 0;
  public interval: any;

  public formBuilder: FormBuilder = new FormBuilder();
  timerForm = this.formBuilder.group({
    inputHours: 0,
    inputMinutes: 0,
    inputSeconds: 0
  })

  onSubmit(e: any): void {
    e.preventDefault();
    console.log(this.timerForm.value);
    this.hours = this.formattingTime(this.timerForm.value.inputHours!.toString());
    this.minutes = this.formattingTime(this.timerForm.value.inputMinutes!.toString());
    this.seconds = this.formattingTime(this.timerForm.value.inputSeconds!.toString());
    this.otherFormatting();
    this.startTimer(parseInt(this.hours)*3600 + parseInt(this.minutes)*60 + parseInt(this.seconds));
  }
  otherFormatting(){
    while(parseInt(this.seconds) > 59){
      this.minutes = (parseInt(this.minutes)+1).toString();
      this.seconds = (parseInt(this.seconds)-60).toString();
    }
    while(parseInt(this.minutes)>59) {
      this.hours = (parseInt(this.hours) + 1).toString();
      this.minutes = (parseInt(this.minutes)-60).toString();
    }
  }
  formattingTime(initValue: string): string{
    return parseInt(initValue) < 10? `0${initValue}` : initValue;
  }
  startTimer(secs: number): void{


    //if(parseInt(this.hours) + parseInt(this.minutes) + parseInt(this.seconds))
    let inputs = document.querySelectorAll('input')!;
    for(let i = 0; i < inputs.length; i++){
      inputs[i].classList.remove("d-inline-block");
      inputs[i].classList.add("d-none");
    }
    let outputs = document.querySelectorAll('.countdown')!//
    for(let i = 0; i < outputs.length; i++){
      outputs[i].classList.add("d-inline-block");
      outputs[i].classList.remove("d-none");
    }

    document.querySelector('.start-watch-timer')!.classList.remove("d-inline-block");
    document.querySelector('.start-watch-timer')!.classList.add("d-none");

    document.querySelector('.reset-timer')!.classList.remove("d-none");
    document.querySelector('.reset-timer')!.classList.add("d-inline-block");
    //document.querySelector('.hours-hand-timer')!.animate(keyframes(tick(20)));
    this.interval = setInterval(() => {
      this.timerMaths(secs);
    }, 1000);
  }
  resetTimer(): void{
    clearInterval(this.interval);
    this.hours = "00";
    this.minutes = "00";
    this.seconds = "00";
    this.secondsSinceStart = 0;
    this.timerForm.reset();
    this.timerForm = this.formBuilder.group({
      inputHours: 0,
      inputMinutes: 0,
      inputSeconds: 0
    })

    let inputs = document.querySelectorAll('input')!;
    for(let i = 0; i < inputs.length; i++){
      inputs[i].classList.remove("d-none");
      inputs[i].classList.add("d-inline-block");
    }
    let outputs = document.querySelectorAll('.countdown')!//
    for(let i = 0; i < outputs.length; i++){
      outputs[i].classList.add("d-none");
      outputs[i].classList.remove("d-inline-block");
    }

    document.querySelector('.start-watch-timer')!.classList.remove("d-none");
    document.querySelector('.start-watch-timer')!.classList.add("d-inline-block");

    document.querySelector('.reset-timer')!.classList.remove("d-inline-block");
    document.querySelector('.reset-timer')!.classList.add("d-none");
  }
  timerMaths(secs: number): void {
    console.log(secs);
    if((parseInt(this.seconds) + parseInt(this.minutes) + parseInt(this.hours)) > 0){
      this.secondsSinceStart++;
      let secsOutput = (secs - this.secondsSinceStart) % 60;
      this.seconds = this.formattingTime(secsOutput.toString());
      this.minutes = this.formattingTime(((secs - this.secondsSinceStart - parseInt(this.seconds)) / 60 % 60).toString());
      this.hours = this.formattingTime(((secs - this.secondsSinceStart - parseInt(this.seconds) - parseInt(this.minutes) * 60) / 3600).toString());
    }
    else{
      alert("TIMER GOING OFF");
      this.resetTimer();

    }
  }



}
