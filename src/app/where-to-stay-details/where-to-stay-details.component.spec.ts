import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToStayDetailsComponent } from './where-to-stay-details.component';

describe('WhereToStayDetailsComponent', () => {
  let component: WhereToStayDetailsComponent;
  let fixture: ComponentFixture<WhereToStayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereToStayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToStayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
