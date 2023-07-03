import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeIndvComponent } from './components/heroe-indv/heroe-indv.component';
import { HeroeIndReactiveComponent } from './components/heroe-indv/heroe-ind-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeIndvComponent,
    HeroeIndReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
