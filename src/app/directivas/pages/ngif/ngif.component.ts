import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

  private respuesta: string;

  constructor() { }

  ngOnInit() {
  }

  private setResultado(): boolean{
    return this.respuesta.toLocaleLowerCase() === 'respuesta';
  }

}
