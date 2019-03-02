import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiciansDetailsComponent } from './musicians-details.component';

describe('MusiciansDetailsComponent', () => {
  let component: MusiciansDetailsComponent;
  let fixture: ComponentFixture<MusiciansDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiciansDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiciansDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
