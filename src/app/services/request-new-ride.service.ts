import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { DemandClass } from '../../../src/app/classes/demand-class';

const BASE_URL = "https://carpoolingbackend.herokuapp.com/v1/apis/"

const httpOptions = {
  headers: new HttpHeaders({
    'content-type':  'application/json',
    'authorization': 'token 025cd9d817038449909bd4e5ce409cefdb4f52b8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestNewRideService {

  constructor(private httpClient: HttpClient) { }

    // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  //POST ride request
  postNewRequestedRide (newRide: any) : Observable<DemandClass>{
    let returnedResponse = this.httpClient.post<DemandClass>(`${BASE_URL}`,JSON.stringify(newRide),httpOptions)
    .pipe(retry(2), 
    catchError(this.handleError))

    return returnedResponse
  }

}
