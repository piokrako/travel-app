import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelListItemComponent } from './travel-list-item.component';

describe('TravelListItemComponent', () => {
  let component: TravelListItemComponent;
  let fixture: ComponentFixture<TravelListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
