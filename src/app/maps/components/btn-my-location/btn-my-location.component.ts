import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent {

  constructor() { }

  goToMyLocation() {
 console.log('my location')
  }

}
