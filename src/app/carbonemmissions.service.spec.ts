import { TestBed } from '@angular/core/testing';

import { CarbonemmissionsService } from './carbonemmissions.service';

describe('CarbonemmissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarbonemmissionsService = TestBed.get(CarbonemmissionsService);
    expect(service).toBeTruthy();
  });
});
