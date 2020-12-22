import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
useremail: FormControl;
userpass: FormControl;

submitted = false;
  constructor(private userService: UserService, public router: Router) { }

  ngOnInit(): void {
    this.useremail = new FormControl('', [Validators.required, Validators.email]);
    this.userpass = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      useremail : this.useremail,
      userpass : this.userpass
    });
  }
  loginCheck(){
    this.submitted=true;
    var user:User;
    user = {
      userID: undefined,
      email:this.loginForm.value.useremail, 
      password:this.loginForm.value.userpass
    };
    // console.log(user);
    this.userService.logger(user).subscribe(
      (response) =>{
        if(response.status==200){
          this.userService.validateUser(response.body);
        }
    })
  }
}
