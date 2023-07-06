import { TestBed } from '@angular/core/testing';

import { AtendenteService } from './atendente.service';

describe('AtendenteServieService', () => {
  let service: AtendenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtendenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
