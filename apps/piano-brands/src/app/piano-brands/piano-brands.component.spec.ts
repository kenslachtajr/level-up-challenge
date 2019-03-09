import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoBrandsComponent } from './piano-brands.component';

describe('PianoBrandsComponent', () => {
  let component: PianoBrandsComponent;
  let fixture: ComponentFixture<PianoBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
