import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evtbind',
  templateUrl: './evtbind.component.html',
  styleUrls: ['./evtbind.component.scss']
})
export class EvtbindComponent implements OnInit {

  private texto:string = 'Clicka el btn';

  constructor() { }

  ngOnInit() {
  }

  private clickfunct(){
    this.texto = "Llamando a través de evento click";
  }

}
