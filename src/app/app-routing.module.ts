import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { WhereToStayComponent } from './where-to-stay/where-to-stay.component';
import { GuestHouseComponent } from './where-to-stay/guest-house/guest-house.component';
import { ResortsComponent } from './where-to-stay/resorts/resorts.component';
import { VehicleForRentComponent } from './vehicle-for-rent/vehicle-for-rent.component';
import { RentalBikesComponent } from './vehicle-for-rent/rental-bikes/rental-bikes.component';
import { RentalCarsComponent } from './vehicle-for-rent/rental-cars/rental-cars.component';
import { WhereToStayDetailsComponent } from './where-to-stay-details/where-to-stay-details.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'where-to-go', component:WhereToGoComponent},
  {path:'where-to-stay', component:WhereToStayComponent}, 
  {path:'vehicle-for-rent', component:VehicleForRentComponent}, 
  {path:'guest-house',component:GuestHouseComponent},
  {path:'resort',component:ResortsComponent},
  {path:'rental-cars',component:RentalCarsComponent},
  {path:'rental-bikes',component:RentalBikesComponent},
  {path:'wheretostay-details',component:WhereToStayDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
