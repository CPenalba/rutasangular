import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  templateUrl: './numero-doble.component.html',
  styleUrl: './numero-doble.component.css',
})
export class NumeroDobleComponent implements OnInit {
  //esta variable nada que ver con el param
  public numero!: number;
  public doble!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  goToHome(): void {
    this._router.navigate(['/']);
  }

  redirect(num: number): void {
    //nos vamos a llamar a nosotros mismos enviando en la ruta el parametro del numero recibido
    this._router.navigate(['/numerodoble', num]);
  }

  ngOnInit(): void {
    //aqui debemos subscribirnos(promesa) a los parametros que puedan venir en una ruta
    this._activeRoute.params.subscribe((parametros: Params) => {
      //dentro de params se recuperan los parametros por su nombre con la siguiente sintaxis: params['parameter name']
      //en este ejemplo, el parametro sera opcional, por lo que vamos a preguntar antes de asignar
      if (parametros['numero'] != null) {
        //los parametros son string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    });
  }
}
