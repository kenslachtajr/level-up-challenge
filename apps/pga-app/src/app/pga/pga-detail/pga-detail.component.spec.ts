import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgaDetailComponent } from './pga-detail.component';

describe('PgaDetailComponent', () => {
  let component: PgaDetailComponent;
  let fixture: ComponentFixture<PgaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
