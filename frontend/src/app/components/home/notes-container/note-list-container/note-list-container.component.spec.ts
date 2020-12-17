import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NoteListContainerComponent } from './note-list-container.component';

describe('NoteListContainerComponent', () => {
  let component: NoteListContainerComponent;
  let fixture: ComponentFixture<NoteListContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
