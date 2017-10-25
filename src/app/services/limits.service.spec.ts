import { TestBed, inject } from '@angular/core/testing';

import { LimitsService } from './limits.service';

describe('LimitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LimitsService]
    });
  });

  it('should be created', inject([LimitsService], (service: LimitsService) => {
    expect(service).toBeTruthy();
  }));
});
