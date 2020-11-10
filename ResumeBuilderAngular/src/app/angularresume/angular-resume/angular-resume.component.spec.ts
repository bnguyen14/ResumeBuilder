import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularResumeComponent } from './angular-resume.component';

describe('AngularResumeComponent', () => {
  let component: AngularResumeComponent;
  let fixture: ComponentFixture<AngularResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
