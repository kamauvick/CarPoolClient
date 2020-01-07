import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardPage } from './dashboard.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule], providers: 
  [Geolocation,NativeGeocoder]

})
export class DashboardPageRoutingModule {}
