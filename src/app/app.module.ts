import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; //importato per ngModel
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, //importato per ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
