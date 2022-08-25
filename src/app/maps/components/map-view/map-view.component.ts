import { PlacesService } from './../../services/places.service';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import{ Map} from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(private placesService: PlacesService) { }

  ngAfterViewInit(): void {
    if (!this.placesService.userLocation) throw Error('There is no placesService user location');
   
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 9, // starting zoom
      projection: {name: 'globe'} // display the map as a 3D globe
  });
  }

}
