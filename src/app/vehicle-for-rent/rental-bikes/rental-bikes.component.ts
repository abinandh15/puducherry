import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-bikes',
  templateUrl: './rental-bikes.component.html',
  styleUrls: ['./rental-bikes.component.scss']
})
export class RentalBikesComponent implements OnInit {

  rentalBikes:Object;

  constructor() { }

  ngOnInit() {
    this.rentalBikes =[
      {
        "name":"Bharathi Park",
        "url":"../../../assets/Pondicherry-Aayi-mandapam.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Heritage walk",
        "url":"../../../assets/Pondicherry-Heritage-walk.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Prominade Beach",
        "url":"../../../assets/Pondicherry-promenade-beach.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Bharathi Park",
        "url":"../../assets/Pondicherry-Aayi-mandapam.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      }
    ]
  }

}
