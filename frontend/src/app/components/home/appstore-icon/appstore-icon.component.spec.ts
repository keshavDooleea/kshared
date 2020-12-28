import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstoreIconComponent } from './appstore-icon.component';

describe('AppstoreIconComponent', () => {
  let component: AppstoreIconComponent;
  let fixture: ComponentFixture<AppstoreIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppstoreIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
