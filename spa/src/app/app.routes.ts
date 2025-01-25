import { Routes } from '@angular/router';
import {ClockComponent} from './views/clock/clock.component';
import {TimeAppletsComponent} from './views/time-applets/time-applets.component';

export const routes: Routes = [
  {path: '', title: "Clock", redirectTo: '/clock', pathMatch: 'full'},
  {path: 'clock', component: ClockComponent, title: 'Clock'},
  {path: 'time-applets', component: TimeAppletsComponent, title: 'Time Applets'},
];
