import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatalistComponent } from './datalist.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DatalistResolver } from 'src/app/resolvers/datalist.resolver';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DatalistComponent,
    resolve: { resolvedDatalist: DatalistResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatalistRoutingModule {}
