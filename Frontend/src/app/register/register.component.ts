import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   useremail: FormControl;
   userpass: FormControl;
   passConfirm: FormControl;
  registerForm: FormGroup;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.useremail = new FormControl('');
    this.userpass = new FormControl('');
    this.passConfirm = new FormControl('');
    this.registerForm = new FormGroup({
      useremail : this.useremail,
      userpass : this.userpass,
      passConfirm : this.passConfirm
    });
  }
  registerNewUser(){
    if(this.registerForm.value.userpass===this.registerForm.value.passConfirm){
      let user:User = {
        user_Id: undefined,
        email: this.registerForm.value.useremail,
        password: this.registerForm.value.userpass
      }
      this.userService.registerUser(user).subscribe(
        (response) => {
          if(response.status==200){
            this.userService.validateUser(response.body);
          }
        }
      )
    }
  }//this.router.navigate(['/app']);
  goBack(){
    this.router.navigate(['']);
  }
}
