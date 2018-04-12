import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RouteComponent } from './pages/route/route.component';
import { AutenticacionComponent } from './autenticacion.component';
import { SessionGuard } from './guard/session.guard';

const routes: Routes = [
  {
    path: '',
    component: AutenticacionComponent,
    children: [
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'route', component: RouteComponent, canActivate: [SessionGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
