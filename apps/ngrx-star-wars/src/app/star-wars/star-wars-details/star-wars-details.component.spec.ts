import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsDetailsComponent } from './star-wars-details.component';

describe('StarWarsDetailsComponent', () => {
  let component: StarWarsDetailsComponent;
  let fixture: ComponentFixture<StarWarsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
