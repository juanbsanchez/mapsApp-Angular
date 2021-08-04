import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class ZoomRangeComponent implements AfterViewInit {
  map!: mapboxgl.Map;
  zoomLevel: number = 10;

  @ViewChild('map') divMap!: ElementRef;
    
  constructor() { }

  ngAfterViewInit(): void {
    
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-4.453238198996093, 36.697059850685385],
      zoom: this.zoomLevel
    });

    this.map.on('zoom', (ev) => {
      this.zoomLevel = this.map.getZoom();
    });
  }

  zoomOut() {
    this.map.zoomOut();
  }

  zoomIn() {
    this.map.zoomIn();
  }

}
