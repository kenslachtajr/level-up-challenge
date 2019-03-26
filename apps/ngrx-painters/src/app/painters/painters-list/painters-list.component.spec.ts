import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintersListComponent } from './painters-list.component';

describe('PaintersListComponent', () => {
  let component: PaintersListComponent;
  let fixture: ComponentFixture<PaintersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
