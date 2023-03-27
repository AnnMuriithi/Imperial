import { TestBed } from '@angular/core/testing';

import { IssueProductsService } from './issue-products.service';

describe('IssueProductsService', () => {
  let service: IssueProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
