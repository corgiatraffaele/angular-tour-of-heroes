import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero'; //importa il file hero.ts(il .ts viene omesso)
import { HeroService } from '../../services/hero.service';

@Component({   //quando trovi l'app-heroes buttaci quel html e scss//
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //variabili che passo alla view

  heroes: Hero[] = [];
  selectedHero?: Hero; // ..? dice che hero può essere null


  //const(nome:servizioDaImportare)/private: che non è disponibile all'HTML
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    //è un lifecyle hook -> nasce: quando viene chiamato(Oninit) 
    //muore quando non viene più chiamato (onDestroy)
    //quindi richiama subito getheroes che in questo caso riempie l'array

    this.getHeroes();


  }

  onSelect(pippo: Hero) {

    //this.-> mi sto riferendo alla classe,senza lo cercherebbe solo dentro a onSelect()

    this.selectedHero = pippo;
  }


  //quando verrà chiamato, richiama il servizio heroService che riempie l'array Hero
  getHeroes(): void {

    //va a prendere heroservice dal costruttore con il this se lo va a prendere nella classe
    //this.heroes =  this.heroService.getHeroes();

    this.heroService.getHeroes().subscribe(response => {
      this.heroes = response;
    });



  }
}
