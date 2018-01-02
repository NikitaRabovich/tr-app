import { Stop } from './stop';
import { STOPS } from './stops/all-stops';

export class Route {
  id: number;
  stopsNumber: number;
  stops: Stop[];
  stopsCount: number;
  firstStop: string;
  lastStop: string;
  switchCount: number;
  /*constructor (routeStart: string, routeEnd: string, name: string) {
    this.stops[0] = routeStart;
    this.stops[this.stopsCount] = routeEnd;
    name = this.id + ' "' + this.stops[0] + ' - ' + this.stops[this.stopsCount] + '"';
  }*/
  /*getName(): string {
      return this.id + ' "' + this.stops[0] + ' - ' + this.stops[this.stopsCount] + '"';
  }*/
}