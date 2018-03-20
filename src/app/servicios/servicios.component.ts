import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from './proveedores.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  private texto:string;
  private proveed: any[];

  constructor(private ps:ProveedoresService) { }

  ngOnInit() {
    this.texto = this.ps.mensaje();
    this.proveed = this.ps.getProveedores();
  }

}
