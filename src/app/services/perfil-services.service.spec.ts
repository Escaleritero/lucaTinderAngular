import { TestBed } from '@angular/core/testing';

import { PerfilServicesService } from './perfil-services.service';

describe('PerfilServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilServicesService = TestBed.get(PerfilServicesService);
    expect(service).toBeTruthy();
  });
});
