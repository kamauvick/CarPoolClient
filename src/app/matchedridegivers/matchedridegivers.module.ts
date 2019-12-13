import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchedridegiversPageRoutingModule } from './matchedridegivers-routing.module';

import { MatchedridegiversPage } from './matchedridegivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchedridegiversPageRoutingModule
  ],
  declarations: [MatchedridegiversPage]
})
export class MatchedridegiversPageModule {}
