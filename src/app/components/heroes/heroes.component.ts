import { Component, OnInit } from '@angular/core';
import { HEROESMOCKDATA } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero'; //importa il file hero.ts(il .ts viene omesso)

@Component({   //quando trovi l'app-heroes buttaci quel html e scss//
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //variabili che passo alla view

  heroes: Hero[] = HEROESMOCKDATA;
  selectedHero?: Hero; // ..? dice che hero può essere null

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pippo:Hero){ 
     
    //this.-> mi sto riferendo alla classe,senza lo cercherebbe solo dentro a onSelect()
   
     this.selectedHero = pippo;
  }
}
