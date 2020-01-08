import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestRidePageRoutingModule } from './request-ride-routing.module';

import { RequestRidePage } from './request-ride.page';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestRidePageRoutingModule
  ],
  declarations: [RequestRidePage]
})


export class RequestRidePageModule {
private destination ;
private source;
constructor(public navCtl :NavController){

  
}
}
