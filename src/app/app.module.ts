import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { WhereToStayComponent } from './where-to-stay/where-to-stay.component';
import { VehicleForRentComponent } from './vehicle-for-rent/vehicle-for-rent.component';
import { RentalCarsComponent } from './vehicle-for-rent/rental-cars/rental-cars.component';
import { RentalBikesComponent } from './vehicle-for-rent/rental-bikes/rental-bikes.component';
import { ListComponent } from './list/list.component';
import { WhereToStayDetailsComponent } from './where-to-stay-details/where-to-stay-details.component';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WhereToGoComponent,
    WhereToStayComponent,
    VehicleForRentComponent,
    RentalCarsComponent,
    RentalBikesComponent,
    ListComponent,
    WhereToStayDetailsComponent,
    BlogListComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
