import { TestBed } from '@angular/core/testing';

import { UserhandlingService } from './userhandling.service';

describe('UserhandlingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserhandlingService = TestBed.get(UserhandlingService);
    expect(service).toBeTruthy();
  });
});
