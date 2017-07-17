
import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
lat: number;
lng: number;
zoom: number;
  constructor() { }

  ngOnInit() {
    this.zoom = 10;
    this.lat = 13.7563;
    this.lng = 100.5018;
  }


}
