import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  //viene passato esternamente
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
