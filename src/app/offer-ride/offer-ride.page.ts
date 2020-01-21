import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';


declare var google: any;
 
@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.page.html',
  styleUrls: ['./offer-ride.page.scss'],
})

export class OfferRidePage implements OnInit {
  
  
  sourceLat: number = 0;
  sourceLong: number = 0;
  destinationLat: number = 0;
  destinationLong: number = 0;
  userInput = { "destination": "", "source": "" }
  sourceCoords = {}
  destinationCoords = {}
  
  

  constructor(private router: Router) {
    
  }

  
  ngOnInit() {
    //this.convertAddressToLatLong()
    
  }
  convertAddressToLatLong=()=>{
 
  }
  
    //convert Address string to lat and long
    geoCode(address:any) {
      let geocoder = new google.maps.Geocoder();
      console.log('found source'+ this.userInput.source)
      //let source = this.userInput.source
      geocoder.geocode({'address':this.userInput.source,}, (results, status) => {
      this.sourceLat = results[0].geometry.location.lat();
      this.sourceLong = results[0].geometry.location.lng();
      let sourceCoords = {latitude:this.sourceLat,longitude:this.sourceLong}
      console.log('Source coordinates are: '+this.sourceLat,this.sourceLong)
    console.log("source lat: " +sourceCoords.latitude + ",source long: " + sourceCoords.longitude);
     });
     geocoder.geocode({'address':this.userInput.destination}, (results, status) => {
      this.destinationLat = results[0].geometry.location.lat();
      this.destinationLong = results[0].geometry.location.lng();
      let destinationCoords = {latitude:this.destinationLat,longitude:this.destinationLong}
      console.log('Destination coordinates are: '+this.destinationLat,this.destinationLong)
      console.log("destination lat: " + destinationCoords.latitude + ", destination long: " + destinationCoords.longitude);
     });
     this.goToDashboard();
     
   }
  
 goToDashboard=()=>{
  this.router.navigate(['/dashboard'],{queryParams:{destination:this.userInput.destination,source:this.userInput.source}})  
 }
}