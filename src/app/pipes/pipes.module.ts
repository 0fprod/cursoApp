import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { PipesRoutingModule } from './pipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PipesComponent } from './pipes.component';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule,
    MatSelectModule
  ],
  declarations: [PipesComponent]
})
export class PipesModule { }
