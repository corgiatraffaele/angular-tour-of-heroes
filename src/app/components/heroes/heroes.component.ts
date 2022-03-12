import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero'; //importa il file hero.ts(il .ts viene omesso)

@Component({   //quando trovi l'app-heroes buttaci quel html e scss//
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;





    //values: number[] = [2,6,8,1570]



  constructor() { }

  ngOnInit(): void {
  }

}
