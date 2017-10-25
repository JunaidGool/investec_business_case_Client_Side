import { TestBed, inject } from '@angular/core/testing';

import { RelationshipsService } from './relationships.service';

describe('RelationshipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelationshipsService]
    });
  });

  it('should be created', inject([RelationshipsService], (service: RelationshipsService) => {
    expect(service).toBeTruthy();
  }));
});
