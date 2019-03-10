import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperasListComponent } from './operas-list.component';

describe('OperasListComponent', () => {
  let component: OperasListComponent;
  let fixture: ComponentFixture<OperasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
