import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCarsComponent } from './rental-cars.component';

describe('RentalCarsComponent', () => {
  let component: RentalCarsComponent;
  let fixture: ComponentFixture<RentalCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
