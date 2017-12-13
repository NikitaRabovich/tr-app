import { Injectable } from '@angular/core';
import { Route } from './route';
import { ROUTES } from './routes/routes';
import { Stop } from './stop';
import { STOPS } from './stops/all-stops';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class RouteService {

  constructor(private messageService: MessageService) { }

  getRoutes(): Observable<Route[]> {
    // Todo: send the message _after_ fetching the routes
    this.messageService.add('RouteService: fetched routes');
    return of(ROUTES);
  }
}
