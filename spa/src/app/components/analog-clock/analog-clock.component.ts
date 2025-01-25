import { Component } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  imports: [],
  standalone: true,
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.css'
})
export class AnalogClockComponent {

  /*//const secondsHand = document.getElementById('secondsHand');
  public lastAngle = 0;

  setSecondsHand()
  {
    const secondsHand = document.getElementById('secondsHand');
    // Get current time
    const now = new Date();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Calculate rotation angle (360/60 = 6 degrees per second)
    const secondsAngle = (seconds + milliseconds / 1000) * 6;

    // Avoid animation rewind by disabling transition for instant jumps
    if (this.lastAngle > secondsAngle)
    {
      secondsHand!.style.transition = "transform 0s linear";

      // Go back to normal after DOM update
      setTimeout(() =>
      {
        secondsHand!.style.transition = "initial";
      }, 0);
    }

    this.lastAngle = secondsAngle;

    // Rotate the seconds hand
    secondsHand!.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
  }
  private analogClockUpdateInterval = setInterval(() => {
    this.updateClock();
  }, 1000);
  updateClock()
  {
    this.setSecondsHand();
    requestAnimationFrame(this.updateClock);
  }

    //this.updateClock();

  // Initialize the clock*/
}
