import { PlacesApiClient } from './../api/placesApiClient';
import { PlacesResponse, Feature } from './../interfaces/places';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
public userLocation?: [number, number];
public isLoadingPlaces: boolean = false;
public places: Feature[] = [];

get isUserLocationReady(): boolean {
  return !!this.userLocation
}

  constructor(private placesApi: PlacesApiClient) {
    this.getUserLocation();
   }

  public async getUserLocation(): Promise<[number, number]> {

    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords} ) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation)},
          (err) => {
            alert('Cound not obtain geoLocation');
            reject();
          }
      );
    })
  }

  getPlacesByQuery(query: string ='') {

    if (!this.userLocation) throw Error('There is no userLocation')

   this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.userLocation!.join(',')
      }
    }).subscribe(resp => {
      console.log(resp.features)

      this.isLoadingPlaces = false;
      this.places = resp.features;

    });

    //this.http.get('https://api.mapbox.com/geocoding/v5/mapbox.places/-3.7025667922966363,40.418485973367154.json?limit=1&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiY3BsYW4yMDMiLCJhIjoiY2w2dXkwdTFjMDk3dTNjcWc3bXF1Nm5rayJ9.QqqejAGOIHOMldC0wc0DNw')
    
  }
}
