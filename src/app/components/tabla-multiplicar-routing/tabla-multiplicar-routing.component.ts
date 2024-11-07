import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-routing',
  templateUrl: './tabla-multiplicar-routing.component.html',
  styleUrl: './tabla-multiplicar-routing.component.css',
})
export class TablaMultiplicarRoutingComponent implements OnInit {
  public numero!: number;
  public numeros: Array<number>;
  constructor(private _activeRoute: ActivatedRoute) {
    this.numeros = new Array<number>();
  }

  generarTabla(): void {
    let aux = new Array<number>();
    for (var i = 1; i <= 10; i++) {
      var resultado = this.numero * i;
      aux.push(resultado);
    }
    this.numeros = aux;
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.numero = parseInt(params['numero']);
      this.generarTabla();
    });
  }
}