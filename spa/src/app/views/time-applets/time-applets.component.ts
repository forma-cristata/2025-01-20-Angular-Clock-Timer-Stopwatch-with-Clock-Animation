import { Component } from '@angular/core';
import {StopwatchComponent} from '../../components/stopwatch/stopwatch.component';
import {TimerComponent} from '../../components/timer/timer.component';

@Component({
  selector: 'app-time-applets',
  imports: [
    StopwatchComponent, TimerComponent
  ],
  standalone: true,
  templateUrl: './time-applets.component.html',
  styleUrl: './time-applets.component.css'
})
export class TimeAppletsComponent {


}
