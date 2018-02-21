import { TestBed, inject } from '@angular/core/testing';

import { SwitchstatesService } from './switchstates.service';

describe('SwitchstatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchstatesService]
    });
  });

  it('should be created', inject([SwitchstatesService], (service: SwitchstatesService) => {
    expect(service).toBeTruthy();
  }));
});
