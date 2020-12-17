import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { BasicComponent } from './layout/basic/basic.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [BasicComponent, ToolbarComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MatToolbarModule
  ]
})
export class LayoutsModule { }
