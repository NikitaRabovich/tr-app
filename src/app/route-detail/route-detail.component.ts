import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Route } from '../route';
import { ROUTES } from '../routes/routes';
import { Stop } from '../stop';
import { STOPS } from '../stops/all-stops';
import { Time } from '../time';
import { TIMES } from '../times/times';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RouteDetailComponent implements OnInit {
  @Input() route: Route;

  stops: Stop[];
  selectedStop: Stop;
  selectedStopr: Stop;

  times: Time[];
  selectedTime: Time;

  onStopSelect(stop: Stop): void {
    this.selectedStop = stop;
    console.log(stop.id + ' ' + stop.name + ' stop seleceted'); 
  }

  reverse(route: Route): void {
    this.route.stops.reverse();
    this.route.switchCount++; // even switchCount = straight, odd switchCount = reverse
    var fs = this.route.firstStop;
    this.route.firstStop = this.route.lastStop;
    this.route.lastStop = fs;

  }

  constructor() { }

  ngOnInit() {
  }

}
