import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  textoPadre:string = "Texto desde el padre";
  texto:string;
  constructor() { }

  ngOnInit() {
  }

  mostrarMensaje(event){
    this.texto = event + "blablba";
  }

}
