import { Component, Input, OnInit } from '@angular/core';
import { Opcion } from '../entities/opcion.model';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.scss']
})
export class ComponenteBComponent implements OnInit {

  opcionSeleccionada:Opcion;
  
  constructor() { }

  ngOnInit(): void {
  }

  alertOpcionSeleccionada(){
    var mensaje = "";
    if (this.opcionSeleccionada){
      mensaje = "Id: " + this.opcionSeleccionada.id + ", Nombre: " + this.opcionSeleccionada.nombre;
    } else {
      mensaje = "No hay una opción seleccionada";
    }
    alert(mensaje);
  }

}
