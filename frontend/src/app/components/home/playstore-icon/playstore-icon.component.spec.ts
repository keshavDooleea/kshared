import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystoreIconComponent } from './playstore-icon.component';

describe('PlaystoreIconComponent', () => {
  let component: PlaystoreIconComponent;
  let fixture: ComponentFixture<PlaystoreIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaystoreIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
