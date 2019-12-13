import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchedridegiversPage } from './matchedridegivers.page';

const routes: Routes = [
  {
    path: '',
    component: MatchedridegiversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchedridegiversPageRoutingModule {}
