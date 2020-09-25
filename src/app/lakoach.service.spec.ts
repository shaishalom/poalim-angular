import { TestBed, inject } from '@angular/core/testing';

import { LakoachService } from './lakoach.service';

describe('NewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LakoachService]
    });
  });

  it('should be created', inject([LakoachService], (service: LakoachService) => {
    expect(service).toBeTruthy();
  }));
});
