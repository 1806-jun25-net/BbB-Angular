import { TestBed, inject } from '@angular/core/testing';

import { LunchapiService } from './lunchapi.service';

describe('LunchapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LunchapiService]
    });
  });

  it('should be created', inject([LunchapiService], (service: LunchapiService) => {
    expect(service).toBeTruthy();
  }));
});
