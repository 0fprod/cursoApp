import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { DriventemplateComponent } from './pages/driventemplate/driventemplate.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormulariosComponent, DriventemplateComponent, ReactiveComponent]
})
export class FormulariosModule { }
