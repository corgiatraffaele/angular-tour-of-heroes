import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; //importato per ngModel
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, //importato per ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
