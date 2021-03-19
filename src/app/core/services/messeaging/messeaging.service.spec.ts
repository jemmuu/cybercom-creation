import { TestBed } from '@angular/core/testing';

import { MesseagingService } from './messeaging.service';

describe('MesseagingService', () => {
  let service: MesseagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesseagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
