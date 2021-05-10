import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  // Puede ser nullo
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _paisService  : PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( (params ) => this._paisService.getPaisPorAlpha( params.id ) ),
      tap( console.log )
    )
    .subscribe( pais => this.pais = pais);

    // // Leemos parametros que vienen en la URL
    // this.activatedRoute.params.
    // subscribe( params => {
    //   // EXTRAEMOS EL ID
    //   console.log(params.id);
    //   // MANDAMOS EL ID
    //   this._paisService.getPaisPorAlpha(params.id)
    //   .subscribe(pais => {
    //     console.log(pais);
    //   });
    // });
  }

}
