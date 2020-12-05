import { TestBed } from '@angular/core/testing';
import { InnerHtmlService } from './inner-html.service';

describe('InnerHtmlService', () => {
  let service: InnerHtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnerHtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
