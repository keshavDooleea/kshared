import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfettiIconComponent } from './confetti-icon.component';

describe('ConfettiIconComponent', () => {
  let component: ConfettiIconComponent;
  let fixture: ComponentFixture<ConfettiIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfettiIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfettiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
