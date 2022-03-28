import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';


//questa classe è iniettabile @injectable quindi la posso richiamare

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  //va a prendere la costante a parte e la restituisce
  getHeroes(): Observable<Hero[]> {
    const HEROES: Observable<Hero[]> = of (HEROESMOCKDATA).pipe(delay(1000));

    this.messageService.add('HeroService:fetched heroes');

    return HEROES;   //off simula una chiamata http!
  }
}
