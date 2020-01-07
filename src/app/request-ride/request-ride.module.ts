import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestRidePageRoutingModule } from './request-ride-routing.module';

import { RequestRidePage } from './request-ride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestRidePageRoutingModule
  ],
  declarations: [RequestRidePage]
})
export class RequestRidePageModule {}
