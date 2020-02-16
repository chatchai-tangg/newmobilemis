import { TestBed } from '@angular/core/testing';

import { CrudapiService } from './crudapi.service';

describe('CrudapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudapiService = TestBed.get(CrudapiService);
    expect(service).toBeTruthy();
  });
});
