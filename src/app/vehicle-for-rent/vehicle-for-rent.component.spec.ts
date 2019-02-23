import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleForRentComponent } from './vehicle-for-rent.component';

describe('VehicleForRentComponent', () => {
  let component: VehicleForRentComponent;
  let fixture: ComponentFixture<VehicleForRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleForRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
