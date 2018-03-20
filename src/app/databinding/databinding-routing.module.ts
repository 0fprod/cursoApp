import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding.component';
import { InterpolacionMetodoComponent } from './pages/interpolacion-metodo/interpolacion-metodo.component';
import { InterpolacionComponent } from './pages/interpolacion/interpolacion.component';
import { PropbindComponent } from './pages/propbind/propbind.component';
import { EvtbindComponent } from './pages/evtbind/evtbind.component';
import { TwowayComponent } from './pages/twoway/twoway.component';

const routes: Routes = [
  {
    path: '',
    component: DatabindingComponent,
    children: [
      {path: 'interp', component: InterpolacionComponent},
      {path: 'interpm', component: InterpolacionMetodoComponent},
      {path: 'propbind', component: PropbindComponent},
      {path: 'evtbind', component: EvtbindComponent},
      {path: 'twoway', component: TwowayComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabindingRoutingModule { }
