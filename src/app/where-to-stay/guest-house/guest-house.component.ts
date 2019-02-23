import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-house',
  templateUrl: './guest-house.component.html',
  styleUrls: ['./guest-house.component.scss']
})
export class GuestHouseComponent implements OnInit {

  guestHouseList:Object;

  constructor() { }

  ngOnInit() {
    this.guestHouseList =[
      {
        "name":"Bharathi Park",
        "url":"./assets/Pondicherry-Aayi-mandapam.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Heritage walk",
        "url":"./assets/Pondicherry-Heritage-walk.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Prominade Beach",
        "url":"./assets/Pondicherry-promenade-beach.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Bharathi Park",
        "url":"./assets/Pondicherry-Aayi-mandapam.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      }
    ]
  }

}
