import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.scss']
})
export class ThingsToDoComponent implements OnInit {
  places=[];
  constructor() { }

  ngOnInit() {
    this.places =[
      {
        "name":"Street Food",
        "url":"./assets/food.png",
        "description":"Rock beach is one of the most prominent beach in Pondy. Unlike traditional beaches this is filled with rocks where you can get an amazing sunrise and sunset view."
      },
      {
        "name":"Adventure Sports",
        "url":"./assets/skydiving.jpg",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Game Zone",
        "url":"./assets/gaming.jpg",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },     
      {
        "name":"Photography",
        "url":"./assets/photography.jpg",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      }
    ];
  }

}
