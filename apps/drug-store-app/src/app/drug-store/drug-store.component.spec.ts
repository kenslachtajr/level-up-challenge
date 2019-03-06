import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugStoreComponent } from './drug-store.component';

describe('DrugStoreComponent', () => {
  let component: DrugStoreComponent;
  let fixture: ComponentFixture<DrugStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
