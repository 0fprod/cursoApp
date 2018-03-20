import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  private lista : string [];
  private listaObjetos : any[];

  constructor() { }

  ngOnInit() {
    this.initLista();
  }

  private initLista(): void{
    this.lista = [
      'Item1',
      'Item2',
      'Item3',
      'Item4',
      'Item5',
      'Item6'
    ];

    this.listaObjetos = [
      {id:'1',name:'obj1'},
      {id:'2',name:'obj2'},
      {id:'3',name:'obj3'},
      {id:'4',name:'obj4'},
      {id:'5',name:'obj5'},
      {id:'6',name:'obj6'}
    ]
  }

}
