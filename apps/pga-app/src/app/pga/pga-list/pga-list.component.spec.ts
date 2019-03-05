import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgaListComponent } from './pga-list.component';

describe('PgaListComponent', () => {
  let component: PgaListComponent;
  let fixture: ComponentFixture<PgaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
