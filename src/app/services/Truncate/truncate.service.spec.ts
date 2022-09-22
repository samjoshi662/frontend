import { TestBed } from '@angular/core/testing';

import { TruncateService } from './truncate.service';

describe('TruncateService', () => {
  let service: TruncateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruncateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
