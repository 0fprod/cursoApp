import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulariosComponent } from './formularios.component';
import { DriventemplateComponent } from './pages/driventemplate/driventemplate.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  {
    path:'',
    component:FormulariosComponent,
    children : [
      {path: 'template', component: DriventemplateComponent},
      {path: 'reactive', component: ReactiveComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
