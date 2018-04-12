import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RouteComponent } from './pages/route/route.component';
import { AutenticacionComponent } from './autenticacion.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { SessionGuard } from './guard/session.guard';

@NgModule({
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [RegisterComponent, LoginComponent, RouteComponent, AutenticacionComponent],
  providers : [AuthService, SessionGuard]
})
export class AutenticacionModule { }
