import { TestBed } from '@angular/core/testing';

import { PianoBrandsService } from './piano-brands.service';

describe('PianoBrandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PianoBrandsService = TestBed.get(PianoBrandsService);
    expect(service).toBeTruthy();
  });
});
