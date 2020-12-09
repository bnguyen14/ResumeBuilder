import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {AppService} from '../app.service';

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
  constructor(private appService: AppService, private router: Router) { }

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
    if (this.appService.registerUser(this.registerForm.value.useremail, this.registerForm.value.userpass,
      this.registerForm.value.passConfirm))
    {
      this.router.navigate(['/app']);
    }
  }
  goBack(){
    this.router.navigate(['']);
  }
}
