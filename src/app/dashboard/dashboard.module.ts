import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import 'hammerjs';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBottomDrawerModule,
    DashboardPageRoutingModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [DashboardPage],
  
})
export class DashboardPageModule {}
