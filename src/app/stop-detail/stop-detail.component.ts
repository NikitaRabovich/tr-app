import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../route';
import { ROUTES } from '../routes/routes';
import { Stop } from '../stop';
import { STOPS } from '../stops/all-stops';
import { Time } from '../time';
import { TIMES } from '../times/times';

@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.css'],
})
export class StopDetailComponent implements OnInit {
  @Input() stop: Stop;
  
    routes: Route[];
    selectedRoute: Route;
  
    onRouteSelect(route: Route): void {
      this.selectedRoute = route;
      console.log(route + 'seleceted');    
    }
  
    reverse(stop: Stop): void {
        
    }
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
