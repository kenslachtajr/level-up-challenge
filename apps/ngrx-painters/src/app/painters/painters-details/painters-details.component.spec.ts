import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintersDetailsComponent } from './painters-details.component';

describe('PaintersDetailsComponent', () => {
  let component: PaintersDetailsComponent;
  let fixture: ComponentFixture<PaintersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
