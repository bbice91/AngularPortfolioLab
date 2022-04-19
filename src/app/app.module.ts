import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { hobbyDetailComponent } from './hobby-detail/hobby-detail.component';
import { hobbiesComponent } from './hobbies/hobbies.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { dogComponent } from './dog/dog.component';
import { CinemaComponent } from './cinema/cinema.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    hobbiesComponent,
    dogComponent,
    hobbyDetailComponent,
    MessagesComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
