import { TestBed } from '@angular/core/testing';

import { DatalistResolver } from './datalist.resolver';

describe('DatalistResolver', () => {
  let resolver: DatalistResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DatalistResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
