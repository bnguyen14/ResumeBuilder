import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedResumesComponent } from './saved-resumes.component';

describe('SavedResumesComponent', () => {
  let component: SavedResumesComponent;
  let fixture: ComponentFixture<SavedResumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedResumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
