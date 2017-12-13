import { Component, OnInit } from '@angular/core';
import { Route } from '../route';
import { RouteService } from '../route.service';
import { Stop } from '../stop';
import { StopService } from '../stop.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css'],
})
export class StopsComponent implements OnInit {
  routes: Route[];
  stops: Stop[];

  selectedRoute: Route;
  selectedStop: Stop;

  onSelect(stop: Stop, routesSet: number[]): void {
    this.selectedStop = stop;
    //this.selectedStop.routesSet = routesSet;
    console.log(stop + 'seleceted ' + stop.id + ' ' + stop.routesSet);
  }

  getRoutes(): void {
    this.routeService.getRoutes().subscribe(routes => this.routes = routes);
  }

  getStops(): void {
    this.stopService.getStops().subscribe(stops => this.stops = stops);
  }

  constructor(private routeService: RouteService, private stopService: StopService) { }

  ngOnInit() {
    this.getRoutes();
    this.getStops();
  }

}
