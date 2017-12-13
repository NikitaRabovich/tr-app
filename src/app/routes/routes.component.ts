import { Component, OnInit } from '@angular/core';
import { Route } from '../route';
import { RouteService } from '../route.service';
import { Stop } from '../stop';
import { StopService } from '../stop.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent implements OnInit {
  routes: Route[];
  stops: Stop[];

  selectedRoute: Route;
  selectedStop: Stop;

  onSelect(route: Route): void {
    this.selectedRoute = route;
    console.log(route + 'seleceted');
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
