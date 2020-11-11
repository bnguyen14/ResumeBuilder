import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {General} from '../../shared/general.model';

@Component({
  selector: 'app-angular-resume',
  templateUrl: './angular-resume.component.html',
  styleUrls: ['./angular-resume.component.css']
})
export class AngularResumeComponent implements OnInit {
  
  @Output() outputName = new EventEmitter<General>();

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('socialInput', {static: false}) socialInputRef: ElementRef;
  @ViewChild('emailInput', {static: false}) emailInputRef: ElementRef;
  @ViewChild('numberInput', {static: false}) numberInputRef: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  sendName() {

    const nameInput = this.nameInputRef.nativeElement.value;
    const socialInput = this.socialInputRef.nativeElement.value;
    const emailInput = this.emailInputRef.nativeElement.value;
    const numberInput = this.numberInputRef.nativeElement.value;

    const general = new General(nameInput, socialInput, emailInput, numberInput);
    console.log(general.name);
    console.log(general.socials);
    console.log(general.email);
    console.log(general.phoneNumber);
    this.outputName.emit(general);
  }

}