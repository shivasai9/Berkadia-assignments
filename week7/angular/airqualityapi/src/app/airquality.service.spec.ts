import { TestBed } from '@angular/core/testing';

import { AirqualityService } from './airquality.service';

describe('AirqualityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirqualityService = TestBed.get(AirqualityService);
    expect(service).toBeTruthy();
  });
});
