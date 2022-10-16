import { TestBed } from '@angular/core/testing';

import { NoauthadminGuard } from './noauthadmin.guard';

describe('NoauthadminGuard', () => {
  let guard: NoauthadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoauthadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
