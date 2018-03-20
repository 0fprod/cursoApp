import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { DirectivasComponent } from './directivas.component';
import { SharedModule } from '../shared/shared.module';
import { NgifComponent } from './pages/ngif/ngif.component';
import { NgstyleComponent } from './pages/ngstyle/ngstyle.component';
import { NgclassComponent } from './pages/ngclass/ngclass.component';
import { NgforComponent } from './pages/ngfor/ngfor.component';
import { NgswitchComponent } from './pages/ngswitch/ngswitch.component';
import { FormsModule } from '@angular/forms';
import { NgcustomDirective } from './pages/ngcustom/ngcustom.directive';
import { NgcustomComponent } from './pages/ngcustom/ngcustom.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { PadreComponent } from './pages/input-output/padre/padre.component';
import { HijoComponent } from './pages/input-output/hijo/hijo.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivasRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [DirectivasComponent, NgifComponent, NgstyleComponent, NgclassComponent, NgforComponent, NgswitchComponent, NgcustomDirective, NgcustomComponent, InputOutputComponent, PadreComponent, HijoComponent]
})
export class DirectivasModule { }
