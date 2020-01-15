import { AfterViewInit,Component, OnInit, ViewChild,ElementRef,NgZone } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DrawerState } from 'ion-bottom-drawer';
import {Router, ActivatedRoute} from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';




declare var google;
let options: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit,AfterViewInit {

 

  drawerState = DrawerState.Docked;
  destinationReceived : string;
  sourceReceived : string;
  destinationLatLong : Number;
  
  @ViewChild('mapElement', {static: true}) mapNativeElement:ElementRef;
  //to implement google map direction services into our application
  directionsService = new google.maps.DirectionsService;

  //to render the direction path into our application
  directionsDisplay = new google.maps.DirectionsRenderer;
  


  constructor(private fb: FormBuilder,
     public activatedRoute: ActivatedRoute, 
     public router : Router,
     private nativeGeocoder: NativeGeocoder){
  
    //  this.createRouteForm();

   }

  ngOnInit() {
    this.pickSourceDestination();
   
    
  }

  convertAddressToLatLong=()=>{
    console.log("Got it!!")
      this.nativeGeocoder.forwardGeocode(this.sourceReceived, options)
     .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
     .catch((error: any) => console.log(error));
  }
  pickSourceDestination=()=>{
    this.activatedRoute.queryParams.subscribe((data)=>{
      let receivedUserInput = Object.values(data)
      this.destinationReceived = receivedUserInput[0]
      console.log(this.destinationReceived)
      
      this.sourceReceived = receivedUserInput[1]
      this.convertAddressToLatLong();
      this.calculateAndDisplayRoute();
      this.drawerState = DrawerState.Docked;
    })
  }

  scrollUpEvent(){
    this.drawerState= DrawerState.Top
  }
 


  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      disableDefaultUI: true,
      center: {lat: 41.85, lng: -87.65}
    })
    this.directionsDisplay.setMap(map);
    
  }

  calculateAndDisplayRoute() {
    const that = this;
    this.directionsService.route({
      origin: this.sourceReceived,
      destination: this.destinationReceived,
      travelMode: 'DRIVING'
    }, (response, status) =>{
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
        console.log(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    
  }

}
