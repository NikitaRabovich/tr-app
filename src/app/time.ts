import { Stop } from './stop';
import { STOPS } from './stops/all-stops';
import { Route } from './route';
import { ROUTES } from './routes/routes';

export class Time {
    id: string;
    route: number;
    stop: number;
    timesStraight: String[];
    timesReverse: String[];
}