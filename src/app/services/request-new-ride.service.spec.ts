import { TestBed } from '@angular/core/testing';

import { RequestNewRideService } from './request-new-ride.service';

describe('RequestNewRideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestNewRideService = TestBed.get(RequestNewRideService);
    expect(service).toBeTruthy();
  });
});
