import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DashboardPage } from '../dashboard/dashboard.page';
@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.page.html',
  styleUrls: ['./offer-ride.page.scss'],
})
export class OfferRidePage implements OnInit {

  userInput = {'destination':'Limuru','source':'Nairobi'}
  constructor(public router : Router) { }
      
  ngOnInit() {
  }
 goToDashboard=()=>{
  
   this.router.navigate(['/dashboard'],{queryParams:{destination:this.userInput.destination,source:this.userInput.source}})
 }
}