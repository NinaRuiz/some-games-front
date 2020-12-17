import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicComponent} from './layout/basic/basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
