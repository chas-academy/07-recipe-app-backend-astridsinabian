import { TestBed } from '@angular/core/testing';

import { RecipeYummlyService } from './recipe-yummly.service';

describe('RecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeYummlyService = TestBed.get(RecipeYummlyService);
    expect(service).toBeTruthy();
  });
});
