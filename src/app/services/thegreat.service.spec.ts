import { TestBed } from '@angular/core/testing';

import { TheGreatService } from './theGreat.service';

describe('TheGreatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheGreatService = TestBed.get(TheGreatService);
    expect(service).toBeTruthy();
  });
});
