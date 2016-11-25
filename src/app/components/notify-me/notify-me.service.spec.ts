/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotifyMeService } from './notify-me.service';

describe('Service: NotifyMe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifyMeService]
    });
  });

  it('should ...', inject([NotifyMeService], (service: NotifyMeService) => {
    expect(service).toBeTruthy();
  }));
});
