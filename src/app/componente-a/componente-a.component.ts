import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Opcion } from '../entities/opcion.model';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.scss']
})
export class ComponenteAComponent implements OnInit {
  @Output() private opcionSeleccionadaA = new EventEmitter<Opcion>();
  opcionSeleccionada:Opcion;
  opciones: Opcion[];

  constructor() { }

  ngOnInit(): void {
    this.opciones = [
      {
        id: 1,
        nombre: 'papa'
      },
      {
        id: 2,
        nombre: 'yuca'
      },
      {
        id: 3,
        nombre: 'platano'
      }
    ];
  }

  enviarOpcionA(opcion){
    //Envío de hijo (Componente A) al padre (Componente Main)
    this.opcionSeleccionadaA.emit(opcion);
  }

}
