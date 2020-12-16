import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Resume } from '../models/resume';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
}
