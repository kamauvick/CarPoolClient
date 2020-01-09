import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { DashboardPage } from '../dashboard/dashboard.page';
@Component({
  selector: 'app-request-ride',
  templateUrl: './request-ride.page.html',
  styleUrls: ['./request-ride.page.scss'],
})

export class RequestRidePage implements OnInit {
  userInput = {'destination':'','source':''}
  constructor(public router : Router) { }
      
  ngOnInit() {
  }
 goToDashboard=()=>{
  
   this.router.navigate(['/dashboard'],{queryParams:{destination:this.userInput.destination,source:this.userInput.source}})
 }
}
