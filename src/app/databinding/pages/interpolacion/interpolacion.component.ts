import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../shared/models/alumno';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent implements OnInit {

  private alumno:Alumno;

  constructor() { }

  ngOnInit() {
    this.alumno = new Alumno(0, 'Fran', 'Tenerife');
  }

}
