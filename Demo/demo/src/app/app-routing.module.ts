import { ChartComponent } from './chart/chart.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'chart', component: ChartComponent },
  { path: '', component: UserComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
