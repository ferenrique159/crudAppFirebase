import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from "@angular/forms";
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe-indv',
  templateUrl: './heroe-indv.component.html',
  styleUrls: ['./heroe-indv.component.css']
})
export class HeroeIndvComponent implements OnInit {

  heroe : any = new HeroeModel();
  disabled = false;

  constructor( private _services:HeroesService, private _router:ActivatedRoute  ){ }

  ngOnInit(): void {

    // Esta es ota forma de captar el id, sin necesidad de suscribirse a la data, como se realizo en anteriores proyectos
    const id = this._router.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {
      this._services.getHeroeById(id).subscribe( data => {
        this.heroe = data;
        this.heroe.id = id;
        console.log({data})
      } )
    }


  }


  onSubmit = ( f : NgForm ) => {
    this.disabled = true;
    if ( f.invalid ) {
      console.log('Formulario invalido')
      return;
    }

    Swal.fire({
      title: 'Guardando',
      showConfirmButton: false,
    })
    Swal.showLoading()

    let peticion : Observable<any>;

    if (this.heroe.id) {
      peticion = this._services.actualizarHeroe( this.heroe )
    } else {
      peticion = this._services.crearHeroe( this.heroe )
    }

    peticion.subscribe( data => {
      Swal.fire({
        icon: 'success',
        title: 'Has actualizado el heroe correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.disabled = false;
    } )

  }

}
