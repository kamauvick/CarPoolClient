import { AfterViewInit,Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

declare var google;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit,AfterViewInit {
 
  @ViewChild('mapElement', {static: true}) mapNativeElement:ElementRef;
  //to implement google map direction services into our application
  directionsService = new google.maps.DirectionsService;

  //to render the direction path into our application
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;


  constructor(private fb: FormBuilder ) {
    this.createRouteForm();
   }

  ngOnInit() {}

  createRouteForm(){
    this.directionForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      disableDefaultUI: true,
      center: {lat: 41.85, lng: -87.65}
    })
    this.directionsDisplay.setMap(map);
  }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: formValues.source,
      destination: formValues.destination,
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
