import { Component, Input, OnInit } from '@angular/core';
import { Resume } from '../models/resume';

@Component({
  selector: 'app-saved-resumes',
  templateUrl: './saved-resumes.component.html',
  styleUrls: ['./saved-resumes.component.css']
})
export class SavedResumesComponent implements OnInit {
  @Input() 
  resume:any;

  constructor() { }

  ngOnInit(): void {
  }

}
