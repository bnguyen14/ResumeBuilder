import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Resume } from '../models/resume';
import { Resumesave } from '../models/resumesave';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-saved-resumes',
  templateUrl: './saved-resumes.component.html',
  styleUrls: ['./saved-resumes.component.css']
})
export class SavedResumesComponent implements OnInit {
  @Input() 
  resume:Resumesave;
  @Input()
  drawer:MatDrawer;
  constructor(private resumeService:ResumeService) { }

  ngOnInit(): void {
  }

  loadResume(){
    this.resumeService.getResume(this.resume.resumeID).subscribe(
      (resume) =>{
        this.resumeService.resume.next(resume);
        this.drawer.toggle();
      }
    )
  }
  deleteResume(){
    this.resumeService.deleteResume(this.resume.resumeID).subscribe(
      (response) => {
        if(response.status==200)
        this.resumeService.deleteFromResumeSave(this.resume);
      }
    )
  }
}
