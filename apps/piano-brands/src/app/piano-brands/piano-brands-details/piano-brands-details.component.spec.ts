import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoBrandsDetailsComponent } from './piano-brands-details.component';

describe('PianoBrandsDetailsComponent', () => {
  let component: PianoBrandsDetailsComponent;
  let fixture: ComponentFixture<PianoBrandsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoBrandsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoBrandsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
