import { PlacesService } from './../../services/places.service';
import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent {

  constructor(private mapService: MapService,
    private placesService: PlacesService) { }

  goToMyLocation() {
 
    if (!this.placesService.isUserLocationReady) throw Error('there is no location for the user.');
    if (!this.mapService.isMapReady) throw Error('The map is not ready')
    this.mapService.flyTo(this.placesService.userLocation!)
  }



}
