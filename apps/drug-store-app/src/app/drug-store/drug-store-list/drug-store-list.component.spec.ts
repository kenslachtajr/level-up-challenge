import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugStoreListComponent } from './drug-store-list.component';

describe('DrugStoreListComponent', () => {
  let component: DrugStoreListComponent;
  let fixture: ComponentFixture<DrugStoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugStoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
