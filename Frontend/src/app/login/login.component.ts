import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
useremail: FormControl;
userpass: FormControl;
  constructor(private appService: AppService, public router: Router) { }

  ngOnInit(): void {
    this.useremail = new FormControl('');
    this.userpass = new FormControl('');
    this.loginForm = new FormGroup({
      useremail : this.useremail,
      userpass : this.userpass
    });
  }
  loginCheck(){
    if (this.appService.logger(this.loginForm.value.useremail, this.loginForm.value.userpass) === true)
    {
      this.router.navigate(['/app']);
    }
  }
}
