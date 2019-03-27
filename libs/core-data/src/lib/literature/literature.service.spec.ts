import { TestBed } from '@angular/core/testing';

import { LiteratureService } from './literature.service';

describe('LiteratureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteratureService = TestBed.get(LiteratureService);
    expect(service).toBeTruthy();
  });
});
