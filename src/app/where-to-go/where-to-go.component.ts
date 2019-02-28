import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-where-to-go',
  templateUrl: './where-to-go.component.html',
  styleUrls: ['./where-to-go.component.scss']
})
export class WhereToGoComponent implements OnInit {

  places: Object;

  constructor( public router:Router ) { }

  ngOnInit() {
    this.places =[
      {
        "name":"Beach",
        "url":"./assets/Pondicherry-promenade-beach.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Boating",
        "url":"./assets/Deluxe_House_Boats.jpg",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },
      {
        "name":"Temple",
        "url":"./assets/Church-of-the-Sacred-Heart-of-Jesus-kb6592.jpg",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      },     
      {
        "name":"Others",
        "url":"./assets/Pondicherry-Aayi-mandapam.png",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
      }
    ];
  }

  public openList(category){
    this.router.navigate( ['list'], { queryParams: { id: category}});
  }

}
