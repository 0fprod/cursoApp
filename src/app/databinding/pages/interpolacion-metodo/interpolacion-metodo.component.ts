import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion-metodo',
  templateUrl: './interpolacion-metodo.component.html',
  styleUrls: ['./interpolacion-metodo.component.scss']
})
export class InterpolacionMetodoComponent implements OnInit {

  private puntuacion:number = 9;

  constructor() { }

  ngOnInit() {
  }

  private getPuntuacion():number{
    return this.puntuacion;
  }

}
