import { TestBed } from '@angular/core/testing';

import { RequestsInvitationsService } from './requests-invitations.service';

describe('RequestsInvitationsService', () => {
  let service: RequestsInvitationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsInvitationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
