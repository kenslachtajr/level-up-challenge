import { TestBed } from '@angular/core/testing';

import { JazzService } from './jazz.service';

describe('JazzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JazzService = TestBed.get(JazzService);
    expect(service).toBeTruthy();
  });
});
