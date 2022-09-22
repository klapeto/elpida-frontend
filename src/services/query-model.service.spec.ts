import { TestBed } from '@angular/core/testing';

import { QueryModelService } from './query-model.service';

describe('QueryModelService', () => {
  let service: QueryModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
