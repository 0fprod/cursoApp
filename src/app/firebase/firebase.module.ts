import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseRoutingModule } from './firebase-routing.module';
import { FirebaseComponent } from './firebase.component';
import { SharedModule } from '../shared/shared.module';
import { FireservService } from './services/fireserv.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FirebaseRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [FirebaseComponent],
  providers : [FireservService]
})
export class FirebaseModule { }
