import {Component, Renderer2} from '@angular/core';
import {AnalogClockComponent} from '../../components/analog-clock/analog-clock.component';

@Component({
  selector: 'app-clock',
  imports: [
    AnalogClockComponent
  ],
  standalone: true,
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  public hrs: string = "";
  public minutes: string = "";
  public seconds: string = "";
  public afternoon: string = ""; // true if it is after noon (AM = false, PM = true)
  private clockUpdateInterval = setInterval(() => {
    this.timeMath();
  }, 1000);
  handMath(): void{
    //Seconds

    //Minutes

    //Hours

    //Set variable in css to add to the angles in the keyframe per hours, seconds, & minutes hand.
    // Rotate the clock per the time presented, then run the animation.



    //let secondsHand: HTMLDivElement = document.querySelector('.seconds-hand') as HTMLDivElement;
    //secondsHand.style.transform = `rotate((${parseInt(this.seconds)*6})deg`;
  }
  timeMath(): void{
    let date: Date = new Date();
    let timeString: string = date.toTimeString().slice(0, 8);

    let hours:string = timeString.slice(0,2);
    let minutes: string = timeString.slice(3, 5);
    let seconds: string = timeString.slice(6, 8);

    this.hrs = this.convert(hours);
    this.minutes = this.convert(minutes);
    this.seconds = this.convert(seconds);
    this.afternoon = parseInt(hours) >= 12? "PM" : "AM";
    //this.handMath();
  }

  convert(timeSegment: string): string{
    timeSegment = (parseInt(timeSegment) > 12 ? (parseInt(timeSegment) - 12) : parseInt(timeSegment)).toString();
    return timeSegment.length <= 1 ? `0${timeSegment}` : timeSegment;
  }

}
