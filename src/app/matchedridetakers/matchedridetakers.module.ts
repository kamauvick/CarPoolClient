import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchedridetakersPageRoutingModule } from './matchedridetakers-routing.module';

import { MatchedridetakersPage } from './matchedridetakers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchedridetakersPageRoutingModule
  ],
  declarations: [MatchedridetakersPage]
})
export class MatchedridetakersPageModule {}
