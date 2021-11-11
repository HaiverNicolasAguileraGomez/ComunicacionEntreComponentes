import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponenteBComponent } from '../componente-b/componente-b.component';
import { Opcion } from '../entities/opcion.model';

@Component({
  selector: 'app-componente-main',
  templateUrl: './componente-main.component.html',
  styleUrls: ['./componente-main.component.scss']
})
export class ComponenteMainComponent implements OnInit {
  opcionSeleccionadaA:Opcion;
  @ViewChild(ComponenteBComponent) child:ComponenteBComponent;

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatoAComponenteB(event){
    //Envío de padre (Componente A) al hijo (Componente B)
    console.log("Dato componente A: ");
    this.opcionSeleccionadaA = event;
    //Comunicación final, también puede invocar métodos de child (mostrar alerta)
    this.child.opcionSeleccionada = this.opcionSeleccionadaA;
    console.log(event);
  }

  mostrarAlerta(){
    this.child.alertOpcionSeleccionada();
  }

}
