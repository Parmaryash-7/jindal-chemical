import { TestBed } from '@angular/core/testing';

import { SeoServiceService } from './seo-service.service';

describe('SeoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeoServiceService = TestBed.get(SeoServiceService);
    expect(service).toBeTruthy();
  });
});
