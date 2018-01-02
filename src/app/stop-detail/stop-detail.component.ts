import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Route } from '../route';
import { ROUTES } from '../routes/routes';
//import { Stop } from '../stop';
//import { STOPS } from '../stops/all-stops';
import { Stopr } from '../stopr';
import { STOPSR } from '../stops/stopsr';

@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StopDetailComponent implements OnInit {
  @Input() //stop: Stop;
  
    
    stopr: Stopr;
    altroute: Route;
    selectedAltroute: Route;
  
    onRouteSelect(altroute: Route): void {
      this.selectedAltroute = altroute;
      console.log(altroute.id + ' selected');
      //console.log(this.altroute.id);    
    }
  
    reverse(route: Route, switchCount: number): void {
      //this.switchCount++; // even switchCount = straight, odd switchCount = reverse
      //console.log(this.switchCount); 
    }
  
    constructor() { }
  
    ngOnInit() {
    }
  
}
