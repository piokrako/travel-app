import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFooterComponent } from "./travel-footer.component";

describe('TravelFooterComponent', () => {
  let component: TravelFooterComponent;
  let fixture: ComponentFixture<TravelFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
