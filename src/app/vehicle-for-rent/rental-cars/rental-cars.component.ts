import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-cars',
  templateUrl: './rental-cars.component.html',
  styleUrls: ['./rental-cars.component.scss']
})
export class RentalCarsComponent implements OnInit {

  rentalCars:Object;

  constructor() { }

  ngOnInit() {
    this.rentalCars =[
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
