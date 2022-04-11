import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //importato per ngModel
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],


  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, //importato per ngModel
    HttpClientModule,//per fare le chiamate http (GET POST PUT etc...)
    HttpClientInMemoryWebApiModule.forRoot( //importiamo il modulo e con forRoot lo configuriamo intercetta
      // le  chiamate http e ritorna dei response simulati dai server
      InMemoryDataService,
      { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
