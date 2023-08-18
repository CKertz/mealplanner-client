import { TestBed } from '@angular/core/testing';

import { GenerateMenuService } from './generate-menu.service';

describe('GenerateMenuService', () => {
  let service: GenerateMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
