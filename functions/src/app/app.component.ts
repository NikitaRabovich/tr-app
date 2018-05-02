import { Component } from '@angular/core';
var timestamp = require('time-stamp');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MINSK TRANSPORT';
  currentTime = timestamp('HH:mm');
}
