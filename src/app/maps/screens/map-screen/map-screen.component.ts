import { PlacesService } from './../../services/places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss']
})
export class MapScreenComponent{

  constructor(private placesService: PlacesService) { }

get isUserLocationReady() {

  return this.placesService.isUserLocationReady;
}

}
