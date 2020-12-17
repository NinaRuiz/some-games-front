import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { BasicComponent } from './layout/basic/basic.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';


@NgModule({
  declarations: [BasicComponent, ToolbarComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
