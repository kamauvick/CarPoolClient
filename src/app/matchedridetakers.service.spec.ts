import { TestBed } from '@angular/core/testing';

import { MatchedridetakersService } from './matchedridetakers.service';

describe('MatchedridetakersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchedridetakersService = TestBed.get(MatchedridetakersService);
    expect(service).toBeTruthy();
  });
});
