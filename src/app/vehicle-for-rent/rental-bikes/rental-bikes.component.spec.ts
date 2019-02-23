import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalBikesComponent } from './rental-bikes.component';

describe('RentalBikesComponent', () => {
  let component: RentalBikesComponent;
  let fixture: ComponentFixture<RentalBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
