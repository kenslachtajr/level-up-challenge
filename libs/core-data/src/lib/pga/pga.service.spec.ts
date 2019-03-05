import { TestBed } from '@angular/core/testing';

import { PgaService } from './pga.service';

describe('PgaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PgaService = TestBed.get(PgaService);
    expect(service).toBeTruthy();
  });
});
