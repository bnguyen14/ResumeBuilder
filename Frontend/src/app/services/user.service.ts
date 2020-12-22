import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Resume } from '../models/resume';
import { User } from '../models/user';
import { ResumeService } from './resume.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authentication = false;
  user:User;
  constructor(private httpClient: HttpClient, private router: Router, private resumeService:ResumeService) { }

  validateUser(user:User){
    // console.log(user);
    this.authentication=true;
    this.user=user;
    this.resumeService.getResumeSaves(this.user.userID).subscribe(
      (saves) => {
        console.log(saves)
        this.resumeService.resumeSaves.push(...saves);
      }
    )
    this.router.navigate(['/app']);
  }
  invalidateUser(){
    this.authentication=false;
    this.user=null;
    this.router.navigate(['']);
  }

  logger(user:User){
    return this.httpClient.post<User>('http://localhost:8080/api/users/login',user,{observe: 'response'});
    
  }

  registerUser(user:User){
    return this.httpClient.post<User>('http://localhost:8080/api/addUser',user,{observe: 'response'})
  }
}
