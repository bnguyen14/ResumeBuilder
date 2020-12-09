import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Resume } from './models/resume';
import { getMaxListeners } from 'process';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  authentication = false;
  userId:number;
  userEmail:string;
  constructor(private httpClient: HttpClient, private router: Router) { }

  logger(useremail: string, userpass: string){
    if (useremail === 'ed@gmail.com' && userpass === 'test') {
      this.authentication = true;
      this.userEmail = 'ed@gmail.com';
      console.log(useremail);
      return true;
    }
    console.log(userpass);
    return false;
  }

  registerUser(useremail: string, userpass: string, passConfirm: string)
  {
    if (userpass === passConfirm)
    {
      this.authentication = true;
      return true;
    }
    return false;
  }

  getResume(id:number){
    return this.httpClient.get<Resume>('http://localhost:8080/getResumeByID/1');
  }
}
