import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  private menuLinks: any[];

  constructor() {
   }

  ngOnInit() {
    this.menuLinks = [
      {link:'interp', label: 'Interpolación'},
      {link:'interpm', label: 'Interpolación con Método'},
      {link:'propbind', label: 'PropertyBinding'},
      {link:'evtbind', label: 'EventBinding'},
      {link:'twoway', label: 'TwoWayDatabing'}
    ]
  }

}
