import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoBrandsListComponent } from './piano-brands-list.component';

describe('PianoBrandsListComponent', () => {
  let component: PianoBrandsListComponent;
  let fixture: ComponentFixture<PianoBrandsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoBrandsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoBrandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
