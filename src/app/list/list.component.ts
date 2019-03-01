import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listObject:Object;
  title:string;

  constructor(public http:HttpClient, public router:ActivatedRoute, public route:Router) { }

  ngOnInit() {
    this.title = this.router.snapshot.queryParams['id'];
    this.listObject = this.http.get('./assets/json/'+this.title+'List.json');
  }

  public openDetails(place){
    this.route.navigate( ['place-details'], { queryParams: { name: place,id: this.title }});
  }

}
