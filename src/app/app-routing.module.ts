import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeIndvComponent } from './components/heroe-indv/heroe-indv.component';
import { HeroeIndReactiveComponent } from './components/heroe-indv/heroe-ind-reactive.component';

const routes: Routes = [
  { path: 'heroe', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeIndvComponent },
  { path: 'heroesReactivo/nuevo', component: HeroeIndReactiveComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'heroe' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
