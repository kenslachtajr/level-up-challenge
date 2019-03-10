import { TestBed } from '@angular/core/testing';

import { OperasService } from './operas.service';

describe('OperasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperasService = TestBed.get(OperasService);
    expect(service).toBeTruthy();
  });
});
