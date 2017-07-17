import { Component, OnInit } from '@angular/core';
import {ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
imageSources: string[];
config: ICarouselConfig ;

  constructor() { }

  ngOnInit() {
    this.imageSources = [
      'https://cdn.ek.aero/hk/english/images/Bangkok-1_tcm291-2379532.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-3mceYlqy3zXlHM9z7Y3_Kt1LwxmAHbgzYH2SDutluuuDJcn',
      'http://www.cruisington.com/wp-content/uploads/2015/02/Bangkok-by-night-from-Peninsula-window.jpg'
    ]
       this.config = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: false,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
}
}
