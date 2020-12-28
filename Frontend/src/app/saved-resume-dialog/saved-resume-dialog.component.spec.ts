import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedResumeDialogComponent } from './saved-resume-dialog.component';

describe('SavedResumeDialogComponent', () => {
  let component: SavedResumeDialogComponent;
  let fixture: ComponentFixture<SavedResumeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedResumeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedResumeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
