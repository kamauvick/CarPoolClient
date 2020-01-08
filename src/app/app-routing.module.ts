import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'matchedridetakers',
    loadChildren: () => import('./matchedridetakers/matchedridetakers.module').then( m => m.MatchedridetakersPageModule)
  },
  {
    path: 'matchedridegivers',
    loadChildren: () => import('./matchedridegivers/matchedridegivers.module').then( m => m.MatchedridegiversPageModule)
  },
  {
    path: 'trip',
    loadChildren: () => import('./trip/trip.module').then( m => m.TripPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  // {
  //   path: 'request-ride',
  //   loadChildren: () => import('./request-ride/request-ride.module').then( m => m.RequestRidePageModule)
  // },
  // {
  //   path: 'offer-ride',
  //   loadChildren: () => import('./offer-ride/offer-ride.module').then( m => m.OfferRidePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
