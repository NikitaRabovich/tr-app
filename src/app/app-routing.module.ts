import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesComponent } from './routes/routes.component';
import { StopsComponent } from './stops/stops.component';
import { RouteDetailComponent }  from './route-detail/route-detail.component';
import { StopDetailComponent }  from './stop-detail/stop-detail.component';

const routes: Routes = [
  {path: 'routes', component: RoutesComponent},
  {path: 'stops', component: StopsComponent},
  {path: '', redirectTo: '/routes', pathMatch: 'full'},
  {path: 'routedetail/:id', component: RouteDetailComponent},
  {path: 'stopdetail/:id', component: StopDetailComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}