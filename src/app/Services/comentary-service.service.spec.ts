import { TestBed } from '@angular/core/testing';

import { ComentaryServiceService } from './comentary-service.service';

describe('ComentaryServiceService', () => {
  let service: ComentaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
