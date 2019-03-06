import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugStoreDetailsComponent } from './drug-store-details.component';

describe('DrugStoreDetailsComponent', () => {
  let component: DrugStoreDetailsComponent;
  let fixture: ComponentFixture<DrugStoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugStoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
