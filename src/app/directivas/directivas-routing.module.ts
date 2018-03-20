import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivasComponent } from './directivas.component';
import { NgifComponent } from './pages/ngif/ngif.component';
import { NgstyleComponent } from './pages/ngstyle/ngstyle.component';
import { NgclassComponent } from './pages/ngclass/ngclass.component';
import { NgforComponent } from './pages/ngfor/ngfor.component';
import { NgswitchComponent } from './pages/ngswitch/ngswitch.component';
import { NgcustomComponent } from './pages/ngcustom/ngcustom.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivasComponent,
    children: [
      { path: 'ngif', component: NgifComponent },
      { path: 'ngstyle', component: NgstyleComponent },
      { path: 'ngclass', component: NgclassComponent },
      { path: 'ngfor', component: NgforComponent },
      { path: 'ngswitch', component: NgswitchComponent },
      { path: 'ngcustom', component: NgcustomComponent},
      { path: 'io', component: InputOutputComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
