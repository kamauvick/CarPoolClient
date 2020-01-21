import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var google: any;


@Injectable({
  providedIn: 'root'
})

export class GeocodeService {
  constructor(public http:HttpClient) { }


  getResults(search_term,latitude,longitude){
    const app_id='OdOjehas2P4I0fqX4K9A'
    const app_code='krlpdHD5HfkLst-2yrtt8A'
    const url=`https://places.cit.api.here.com/places/v1/autosuggest?at=${latitude},${longitude}&q=${search_term}&app_id=${app_id}&app_code=${app_code}`
    return this.http.get(url)
    // console.log('in interval')
  }
}



