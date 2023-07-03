import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private urlFirebase = 'https://angularcrud2023-default-rtdb.firebaseio.com';

  constructor( private _http: HttpClient ) { }

  crearHeroe = ( heroe: HeroeModel ) => {
    return this._http.post(`${ this.urlFirebase }/heroes.json`, heroe).pipe( map ( (data : any ) => {
      heroe.id = data.name;
      return heroe;
    }))
  }

  actualizarHeroe = ( heroe : HeroeModel ) => {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this._http.put(`${ this.urlFirebase }/heroes/${heroe.id}.json`, heroeTemp  );
  }

  getHeroes = () => {
    return this._http.get( `${ this.urlFirebase }/heroes.json`).pipe( map( this.heroesArray) )
  }

  getHeroeById = ( id : any ) => {
    return this._http.get( `${ this.urlFirebase }/heroes/${ id }.json` );
  }

  deleteHeroe = ( id : any ) => {
    return this._http.delete( `${ this.urlFirebase }/heroes/${ id }.json` );
  }


  private heroesArray = ( heroesObj : any ) => {

    const heroes : HeroeModel[] = [];

    if (heroesObj === null ) {
      return [];
    }

    Object.keys( heroesObj ).forEach( (key : any) => {
      const heroe : HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push( heroe );
    })

    return heroes
  }
}
