import { Component } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroesList : any;
  cargando : any = true;

  constructor( private _services:HeroesService ){
    this.heroesList = this._services.getHeroes().subscribe( data => {
      setTimeout(() => {
        this.heroesList = data;
        this.cargando = false;
      }, 500);
    })
   }

   deleteHeroe = ( heroe : HeroeModel, i : number ) => {

    Swal.fire({
      title: 'Estas seguro?',
      text: `Deseas borrar a ${ heroe.nombre }`,
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirmar'
    }).then( data => {
      if (data.value) {
        this.heroesList.splice(i, 1);
        this._services.deleteHeroe( heroe.id ).subscribe()
        Swal.fire({
          icon: 'info',
          title: 'Borrado exitoso',
        })
      }
    } )




   }
}
