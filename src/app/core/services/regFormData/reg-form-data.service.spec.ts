import { TestBed } from '@angular/core/testing';

import { RegFormDataService } from './reg-form-data.service';

describe('RegFormDataService', () => {
  let service: RegFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
