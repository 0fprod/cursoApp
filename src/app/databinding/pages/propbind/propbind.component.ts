import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propbind',
  templateUrl: './propbind.component.html',
  styleUrls: ['./propbind.component.scss']
})
export class PropbindComponent implements OnInit {

  texto:string = 'Escribe algo';

  constructor() { 
    setTimeout(() => {
      this.texto = 'porfavor';
    }, 2000)
  }

  ngOnInit() {
  }

}
