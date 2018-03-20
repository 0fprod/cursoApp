import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  private menuLinks: any[];

  constructor() { }

  ngOnInit() {
    this.menuLinks = [
      {link:'ngif', label: 'NgIf'},
      {link:'ngstyle', label: 'ngStyle'},
      {link:'ngclass', label: 'ngClass'},
      {link:'ngfor', label: 'ngFor'},
      {link:'ngswitch', label: 'ngSwitch'},
      {link:'ngcustom', label: 'ngCustom'},
      {link:'io', label: 'I/O'}
    ]
  }

}
