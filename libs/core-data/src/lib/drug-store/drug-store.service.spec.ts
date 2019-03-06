import { TestBed } from '@angular/core/testing';

import { DrugStoreService } from './drug-store.service';

describe('DrugStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrugStoreService = TestBed.get(DrugStoreService);
    expect(service).toBeTruthy();
  });
});
