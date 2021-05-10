import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px;
  }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  hayError = false;

  constructor(
    private _paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  getClaseCss ( region: string) {
    return (region === this.regionActiva) 
    ? 'btn btn-primary'
    : 'btn btn-outline-primary';
  }

  activarRegion( region: string) {
    // Paraque no cargue si de nuevo opirme click en oceania
    if(region === this.regionActiva) {
      return;
    }
    this.hayError = false;
    this.regionActiva = region;
    // Elima todo lo que habia por ej de oceania y hace que fluya mas rapido el cambio
    this.paises = [];
    this._paisService.buscarRegion( region )
    .subscribe(res => {
      console.log(res);
      this.paises = res;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    })
  }
}
