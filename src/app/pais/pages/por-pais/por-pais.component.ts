import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = '';

  constructor() { }

  // tslint:disable-next-line: typedef
  buscar(){
    console.log(this.termino);
  }
}
