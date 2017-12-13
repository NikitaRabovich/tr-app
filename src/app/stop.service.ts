import { Injectable } from '@angular/core';
import { Route } from './route';
import { ROUTES } from './routes/routes';
import { Stop } from './stop';
import { STOPS } from './stops/all-stops';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class StopService {

  constructor(private messageService: MessageService) { }

  getStops(): Observable<Stop[]> {
    // Todo: send the message _after_ fetching the stops
    this.messageService.add('StopService: fetched stops');
    return of(STOPS);
  }
}
