import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { StopsComponent } from './stops/stops.component';
import { TimesComponent } from './times/times.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { RouteService } from './route.service';
import { StopService } from './stop.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { StopDetailComponent } from './stop-detail/stop-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    StopsComponent,
    TimesComponent,
    RouteDetailComponent,
    MessagesComponent,
    StopDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ RouteService, StopService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
