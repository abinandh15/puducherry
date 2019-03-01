import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {
  
  relatedPlaces:Object;
  imageUrl:string;
  title:string;
  category:string;

  constructor(public http:HttpClient, public router:ActivatedRoute) { }

  ngOnInit() {
    this.category = this.router.snapshot.queryParams['id'];
    this.http.get<any>('./assets/json/'+this.category+'List.json').subscribe(data=>{
      this.relatedPlaces = data; 
      console.log(data); 
      console.log(this.router.snapshot.queryParams['name'])
      data.forEach(places => {
        
        if(this.router.snapshot.queryParams['name'] == places.name){
          console.log(places.name);
          this.title= places.name;
          this.imageUrl = places.url;
        }
      });     

    });
          
  
  }

}
