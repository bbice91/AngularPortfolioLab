import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { dogComponent } from './dog/dog.component';
import { hobbiesComponent } from './hobbies/hobbies.component';
import { hobbyDetailComponent } from './hobby-detail/hobby-detail.component';
import { dogDetailComponent } from './dog-detail/dog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: hobbyDetailComponent },
  { path: 'detail/:id', component: dogDetailComponent },
  { path: 'hobbies', component: hobbiesComponent },
  { path: 'dog', component: dogComponent },
  { path: 'cinema', component: CinemaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
