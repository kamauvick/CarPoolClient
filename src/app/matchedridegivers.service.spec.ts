import { TestBed } from '@angular/core/testing';

import { MatchedridegiversService } from './matchedridegivers.service';

describe('MatchedridegiversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchedridegiversService = TestBed.get(MatchedridegiversService);
    expect(service).toBeTruthy();
  });
});
