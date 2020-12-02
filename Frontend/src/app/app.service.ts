import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  logger(useremail: string, userpass: string){
    if (useremail === 'ed@gmail.com' && userpass === 'test') {
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
      return true;
    }
    return false;
  }
}
