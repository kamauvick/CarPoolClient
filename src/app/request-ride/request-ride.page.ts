import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RequestNewRideService } from '../services/request-new-ride.service';
import { DemandClass } from '../classes/demand-class';

@Component({
  selector: 'app-request-ride',
  templateUrl: './request-ride.page.html',
  styleUrls: ['./request-ride.page.scss'],
})

export class RequestRidePage implements OnInit {
 
  userInput: DemandClass

  constructor(public router : Router,
    public requestNewRideService : RequestNewRideService) 
    { 
      this.userInput = new DemandClass()
    }
      
  ngOnInit() {
  }
 submitNewRideData=()=>{

  this.requestNewRideService.postNewRequestedRide(this.userInput).subscribe((response)=>{
     //navigate to dashboard while sending source and destination values from form to dashboard
   this.router.navigate(['/dashboard'],{queryParams:{destination:this.userInput.destination,source:this.userInput.origin}})
  })
  }
}
