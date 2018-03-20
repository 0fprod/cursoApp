import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  proveedores: any[] = [
    {id:'1', name:'prov1'},
    {id:'2', name:'prov2'}
  ]

  constructor() { }

  mensaje(){
    return "Mensaje del servicio";
  }

 getProveedores(){
    return this.proveedores;
  }

}
