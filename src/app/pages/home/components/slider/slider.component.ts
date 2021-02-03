import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides: any[]=[];
  slideConfig: any = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    arrows: false
  };


  constructor() { }

  ngOnInit(): void {
    this.slides = [
      {img: "https://picsum.photos/700/200?random=1" },
      {img: "https://picsum.photos/700/200?random=2" },
      {img: "https://picsum.photos/700/200?random=3" },
      {img: "https://picsum.photos/700/200?random=4" },
      {img: "https://picsum.photos/700/200?random=5" },
      {img: "https://picsum.photos/700/200?random=6" },
      {img: "https://picsum.photos/700/200?random=7" }
    ]
  }

}
