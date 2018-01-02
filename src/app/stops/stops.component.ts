import { Component, OnInit } from '@angular/core';
import { Route } from '../route';
import { RouteService } from '../route.service';
//import { Stop } from '../stop';
//import { STOPS } from '../stops/all-stops';
import { StopService } from '../stop.service';
import { Stopr } from '../stopr';
import { STOPSR } from '../stops/stopsr';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css'],
})
export class StopsComponent implements OnInit {
  routes: Route[];
  stopsr: Stopr[];

  selectedRoute: Route;
  selectedStopr: Stopr;
  altroute: Route;

  onSelect(stopr: Stopr): void {
    this.selectedStopr = stopr;
    console.log(stopr.id + ' selected');
  }

  getRoutes(): void {
    this.routeService.getRoutes().subscribe(routes => this.routes = routes);
  }

  getStopsr(): void {
    this.stopService.getStopsr().subscribe(stopsr => this.stopsr = stopsr);
  }

  constructor(private routeService: RouteService, private stopService: StopService) { }

  ngOnInit() {
    this.getRoutes();
    this.getStopsr();
    this.stopsr.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0; });
  }
}
