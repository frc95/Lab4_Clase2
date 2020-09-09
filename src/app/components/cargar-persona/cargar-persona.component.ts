import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../clases/alumno'

@Component({
  selector: 'app-cargar-persona',
  templateUrl: './cargar-persona.component.html',
  styleUrls: ['./cargar-persona.component.css']
})
export class CargarPersonaComponent implements OnInit {

  @Output()onCargar = new EventEmitter<Alumno>();
  nombre : string;
  apellido : string;
  legajo : number;
  materia : string;


  constructor() { }

  ngOnInit(): void {
  }

  cargar(e)
  {
    const alumno = new Alumno(this.nombre,this.apellido,this.legajo,this.materia);
    console.log(alumno);
    this.onCargar.emit(alumno);
  }

}
