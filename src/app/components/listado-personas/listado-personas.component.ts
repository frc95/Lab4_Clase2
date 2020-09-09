import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  @Input() listaNombres: Alumno[];
  @Input() titulo;

  constructor() { }

  ngOnInit(): void {
    console.log(this.listaNombres);
  }

}
