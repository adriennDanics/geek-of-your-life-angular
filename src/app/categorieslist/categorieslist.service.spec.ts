import { TestBed } from '@angular/core/testing';

import { CategorieslistService } from './categorieslist.service';

describe('CategorieslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorieslistService = TestBed.get(CategorieslistService);
    expect(service).toBeTruthy();
  });
});
