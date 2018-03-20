import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  private menuLinks: any[];

  constructor() { }

  ngOnInit() {
    this.menuLinks = [
      {link:'template', label: 'Template Driven'},
      {link:'reactive', label: 'Reactive'},
    ]
  }

}
