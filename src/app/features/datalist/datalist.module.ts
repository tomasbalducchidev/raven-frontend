import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatalistRoutingModule } from './datalist-routing.module';
import { DatalistComponent } from './datalist.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DatalistComponent, TableComponent],
  imports: [
    CommonModule,
    DatalistRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class DatalistModule {}
