import { PlacesService } from './../../services/places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss']
})
export class MapScreenComponent implements OnInit {

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
  }

}
