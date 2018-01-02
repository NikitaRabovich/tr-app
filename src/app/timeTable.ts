import { Stop } from './stop';
import { STOPS } from './stops/all-stops';
import { Route } from './route';
import { ROUTES } from './routes/routes';

export class Time {
    id: number;
    route: number;
    trip: Date;
    direction: number;
    timeTable: String[];
}