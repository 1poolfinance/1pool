import { TestBed } from '@angular/core/testing';

import { EncrDecrService } from './encr-decr.service';

describe('EncrDecrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncrDecrService = TestBed.get(EncrDecrService);
    expect(service).toBeTruthy();
  });
});
