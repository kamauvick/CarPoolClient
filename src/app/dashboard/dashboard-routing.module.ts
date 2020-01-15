import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardPage } from './dashboard.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'offer-ride',
        children: [
          {
            path: '',
            loadChildren: () => import('../offer-ride/offer-ride.module').then( m => m.OfferRidePageModule)
          }
        ]
      },
      {
        path: 'request-ride',
        children: [
          {
            path: '',
            loadChildren: () => import('../request-ride/request-ride.module').then( m => m.RequestRidePageModule)
          }
        ]
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule],
  providers: 
  [Geolocation,NativeGeocoder]

})
export class DashboardPageRoutingModule {}
