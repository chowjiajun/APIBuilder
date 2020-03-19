import { TestBed } from '@angular/core/testing';

import { ApiDataHandlerService } from './api-data-handler.service';

describe('ApiDataHandlerService', () => {
  let service: ApiDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
