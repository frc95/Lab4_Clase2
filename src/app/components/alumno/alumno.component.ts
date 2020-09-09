import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  caso : number;
  titulo : string = "Listado de Alumnos";
  listaNombres = [];

  constructor() { }

  ngOnInit(): void {
  }

  nav(caso : number)
  {
    if(caso==1)
    {
      this.caso=1;
    }
    if(caso==2)
    {
      this.caso=2;
    }
  }

  CargarAlumno(e)
  {
    console.log("Salida: "+e.nombre);
    this.listaNombres.push(e);
  }

}
