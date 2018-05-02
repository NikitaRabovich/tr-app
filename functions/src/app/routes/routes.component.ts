import { Component, OnInit } from '@angular/core';
import { Route } from '../route';
import { RouteService } from '../route.service';
import { Stop } from '../stop';
import { StopService } from '../stop.service';
import { Stopr } from '../stopr';
import { STOPSR } from '../stops/stopsr';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent implements OnInit {
  routes: Route[];
  stops: Stop[];
  stopsr: Stopr[];

  selectedRoute: Route;
  selectedStop: Stop;

  onSelect(route: Route): void {
    this.selectedRoute = route;
    console.log(route.id + ' route seleceted');
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
  }

}
