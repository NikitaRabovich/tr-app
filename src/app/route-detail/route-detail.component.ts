import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../route';
import { ROUTES } from '../routes/routes';
import { Stop } from '../stop';
import { STOPS } from '../stops/all-stops';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css'],
})
export class RouteDetailComponent implements OnInit {
  @Input() route: Route;

  stops: Stop[];
  selectedStop: Stop;

  onStopSelect(stop: Stop): void {
    this.selectedStop = stop;
    console.log(stop + 'seleceted');    
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
