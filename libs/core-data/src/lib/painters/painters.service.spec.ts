import { TestBed } from '@angular/core/testing';

import { PaintersService } from './painters.service';

describe('PaintersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaintersService = TestBed.get(PaintersService);
    expect(service).toBeTruthy();
  });
});
