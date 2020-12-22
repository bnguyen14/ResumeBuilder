import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Document, HeadingLevel, Packer, Paragraph} from 'docx';
import {saveAs} from 'file-saver';
import { Resumesave } from './models/resumesave';
import { ResumeService } from './services/resume.service';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeBuilderAngular';
  something = 'test title';
  // resumes: any[] = [
  //   {"id": 1,"resumeName": "Resume 1",date: "1/12/2020"},
  //   {"id": 2,"resumeName": "Resume 2",date: "1/12/2020"},
  //   {"id": 3,"resumeName": "Resume 3",date: "1/12/2020"},
  //   {"id": 5,"resumeName": "Resume 5",date: "1/12/2020"},
  //   {"id": 4,"resumeName": "Resume 4",date: "1/12/2020"}
  // ];
  
  constructor( public userService: UserService, private router: Router, public resumeService:ResumeService) {}
  logOut(){
    this.userService.invalidateUser();
  }
  logIn(){
    this.router.navigate(['']);
  }
  // public trackItem(index:number,item:Resumesave){
  //   return item.
  // }
}
