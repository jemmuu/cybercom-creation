import { TestBed } from '@angular/core/testing';

import { FireBaseCrudRealService } from './fire-base-crud-real.service';

describe('FireBaseCrudRealService', () => {
  let service: FireBaseCrudRealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBaseCrudRealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
