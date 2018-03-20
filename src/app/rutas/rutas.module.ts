import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasRoutingModule } from './rutas-routing.module';
import { RutasComponent } from './rutas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RutasRoutingModule,
    SharedModule
  ],
  declarations: [RutasComponent]
})
export class RutasModule { }
