import { AfterViewInit,Component, OnInit, ViewChild,ElementRef,NgZone } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { DrawerState } from 'ion-bottom-drawer';
import {Router, ActivatedRoute} from '@angular/router';

declare var google;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit,AfterViewInit {
  drawerState = DrawerState.Docked;
  destinationReceived : String;
  sourceReceived : String;
  @ViewChild('mapElement', {static: true}) mapNativeElement:ElementRef;
  //to implement google map direction services into our application
  directionsService = new google.maps.DirectionsService;

  //to render the direction path into our application
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;


  constructor(private fb: FormBuilder, public activatedRoute: ActivatedRoute, public router : Router){
  
    //  this.createRouteForm();

   }

  ngOnInit() {
    this.pickSourceDestination();
    
  }

  pickSourceDestination=()=>{
    this.activatedRoute.queryParams.subscribe((data)=>{
      let receivedUserInput = Object.values(data)
      this.destinationReceived = receivedUserInput[0]
      console.log(this.destinationReceived)
      
      this.sourceReceived = receivedUserInput[1]
      this.calculateAndDisplayRoute();
    })
  }
  // createRouteForm(){
  //   this.directionForm = this.fb.group({
  //     source: ['', Validators.required],
  //     destination: ['', Validators.required]
  //   });
  // }


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
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  

   

}
