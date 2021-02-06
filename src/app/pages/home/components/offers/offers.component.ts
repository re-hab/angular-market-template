import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  categories: any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.categories = [
      {
        img: "https://picsum.photos/200/200?random=8",
        description: "Juices"
      },
      {
        img: "https://picsum.photos/200/200?random=9",
        description: "Meat"
      },
      {
        img: "https://picsum.photos/200/200?random=10",
        description: "Hot Drinks"
      },
      {
        img: "https://picsum.photos/200/200?random=11",
        description: "Home Care"
      }
    ]
  }

}
