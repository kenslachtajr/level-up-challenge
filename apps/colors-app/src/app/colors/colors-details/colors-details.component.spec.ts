import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsDetailsComponent } from './colors-details.component';

describe('ColorsDetailsComponent', () => {
  let component: ColorsDetailsComponent;
  let fixture: ComponentFixture<ColorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
