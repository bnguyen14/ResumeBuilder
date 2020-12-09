import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-resumes',
  templateUrl: './saved-resumes.component.html',
  styleUrls: ['./saved-resumes.component.css']
})
export class SavedResumesComponent implements OnInit {
  


resumes: any[] = [
  {"id": 1,"resumeName": "Resume 1",date: "1/12/2020"},
  {"id": 2,"resumeName": "Resume 2",date: "1/12/2020"},
  {"id": 3,"resumeName": "Resume 3",date: "1/12/2020"},
  {"id": 4,"resumeName": "Resume 4",date: "1/12/2020"},
  {"id": 5,"resumeName": "Resume 5",date: "1/12/2020"}
];
  

  constructor() { }

  ngOnInit(): void {
  }

}
