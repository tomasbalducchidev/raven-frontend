import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatalistRoutingModule } from './datalist-routing.module';
import { DatalistComponent } from './datalist.component';


@NgModule({
  declarations: [
    DatalistComponent
  ],
  imports: [
    CommonModule,
    DatalistRoutingModule
  ]
})
export class DatalistModule { }
