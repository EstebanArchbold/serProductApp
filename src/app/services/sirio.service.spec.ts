import { TestBed } from '@angular/core/testing';

import { SirioService } from './sirio.service';

describe('SirioService', () => {
  let service: SirioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SirioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
