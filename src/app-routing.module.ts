import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './app/components/heroes/heroes.component';


const routes: Routes = [ //contiene le rotte dell'app ()
  { path: 'heroes', component: HeroesComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }