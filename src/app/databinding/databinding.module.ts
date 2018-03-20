import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DatabindingRoutingModule } from './databinding-routing.module';
import { DatabindingComponent } from './databinding.component';
import { SharedModule } from '../shared/shared.module';
import { InterpolacionMetodoComponent } from './pages/interpolacion-metodo/interpolacion-metodo.component';
import { InterpolacionComponent } from './pages/interpolacion/interpolacion.component';
import { PropbindComponent } from './pages/propbind/propbind.component';
import { EvtbindComponent } from './pages/evtbind/evtbind.component';
import { TwowayComponent } from './pages/twoway/twoway.component';

@NgModule({
  imports: [
    CommonModule,
    DatabindingRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [DatabindingComponent, InterpolacionMetodoComponent, InterpolacionComponent, PropbindComponent, EvtbindComponent, TwowayComponent]
})
export class DatabindingModule { }
