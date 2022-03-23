import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';


//questa classe è iniettabile @injectable quindi la posso richiamare

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //va a prendere la costante a parte e la restituisce
  getHeroes(): Observable<Hero[]> {
    return of(HEROESMOCKDATA);   //off simula una chiamata http!
  }
}
