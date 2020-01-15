import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


let options: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};



@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.page.html',
  styleUrls: ['./offer-ride.page.scss'],
})

export class OfferRidePage implements OnInit {

  userInput = {'destination':'','source':''}
  
  constructor(public router : Router,private nativeGeocoder: NativeGeocoder) { }

  convertAddressToLatLong=()=> {
    console.log("Got it!!")

    // this.nativeGeocoder.forwardGeocode(this.userInput.destination, options)
    // .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
    // .catch((error: any) => console.log(error));
    }
      
  ngOnInit() {
    
  }
 goToDashboard=()=>{
  
   this.router.navigate(['/dashboard'],{queryParams:{destination:this.userInput.destination,source:this.userInput.source}})
 }
}
