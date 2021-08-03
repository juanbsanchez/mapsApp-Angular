import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .map-container{
      width: 100%;
      height: 100%;
    }

    .row{
      background-color: #fff;
      position: fixed;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      border-radius: 5px;
      z-index: 999;
    }
    `
  ]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-4.453238198996093, 36.697059850685385],
      zoom: 17
    });
  }

}
