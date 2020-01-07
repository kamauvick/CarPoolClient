import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestRidePage } from './request-ride.page';

const routes: Routes = [
  {
    path: '',
    component: RequestRidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestRidePageRoutingModule {}
