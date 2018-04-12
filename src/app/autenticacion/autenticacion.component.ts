import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.scss']
})
export class AutenticacionComponent implements OnInit {

  private menuLinks:any[];

  constructor() { }

  ngOnInit() {
    this.menuLinks = [
      {link:'register', label: 'Registro'},
      {link:'login', label: 'Login'},
      {link:'route', label: 'Ruta protegida'}
    ]
  }

}
