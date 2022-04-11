import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';

//questa classe è iniettabile @injectable quindi la posso richiamare

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})    
  };


  constructor
  (private messageService: MessageService,
   private http: HttpClient,
    ){ }

  //va a prendere la costante a parte e la restituisce
  getHeroes(): Observable<Hero[]> {
return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      catchError(error => {
        console.error(error);

        this.log(`getHeroes failed : ${error.body.error}`);

        let response = [] as Hero[];

        return of (response);
      }),
      
      tap(_=> this.log('fetched heroes'))
    );

    

  
  }

  getHero(selectedId: number):Observable<Hero>{
//const hero = HEROESMOCKDATA.find(h.id === selectedId)

return this.http.get<Hero>(this.heroesUrl + '/' + selectedId)
.pipe(
  tap(_ =>this.log(`fetched hero id = ${selectedId}`)),
  catchError(error=> {
console.error(error);

this.log(`getHero id=${selectedId} failed: ${error.status}: ${error.body.error}`);

return of();
  })

);

  }


  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}


/** PUT: update the hero on the server */
updateHero(hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
   
    catchError(error => {
      console.error(error);

      this.log(`updateHero failed :${error.status}: ${error.body.error}`);

      return of();

    })

  );
}


  };





