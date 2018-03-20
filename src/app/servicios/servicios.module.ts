import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { SharedModule } from '../shared/shared.module';
import { ProveedoresService } from './proveedores.service';

@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    SharedModule
  ],
  declarations: [ServiciosComponent],
  providers: [ProveedoresService]
})
export class ServiciosModule { }
