import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {General} from '../../shared/general.model';

@Component({
  selector: 'app-angular-resume',
  templateUrl: './angular-resume.component.html',
  styleUrls: ['./angular-resume.component.css']
})
export class AngularResumeComponent implements OnInit {

  maximumFormList = 3;

  dynamicForm : FormGroup;

  @Output() outputName = new EventEmitter<General>();

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('socialInput', {static: false}) socialInputRef: ElementRef;
  @ViewChild('emailInput', {static: false}) emailInputRef: ElementRef;
  @ViewChild('numberInput', {static: false}) numberInputRef: ElementRef;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      websites: new FormArray([])
    });
    this.websiteFormArray.push(this.formBuilder.group({
      website : ''
    }));
  }
  //the overall form control of "dynamicForm"
  get formControl() { return this.dynamicForm.controls; }
  //use FormArray to push another form into the array
  get websiteFormArray() { return this.formControl.websites as FormArray }
  //use in .html file to find how many forms are in a group
  get websiteFormGroup() { return this.websiteFormArray.controls as FormGroup[] }

  //adds another set of the form in the specific category
  incrementList(category:string){
    switch(category){
      case 'website':{
        if(this.websiteFormGroup.length<=this.maximumFormList){
          this.websiteFormArray.push(this.formBuilder.group({
            website : ''
          }));
        }
        break;
      }
    }
  }

  decrementList(category:string, i:number){
    switch(category){
      case 'website':{
        if(this.websiteFormGroup.length<=this.maximumFormList){
          this.websiteFormArray.removeAt(i);
        }
        break;
      }
    }
  }

  printResume(){
    console.log("as value: "+this.dynamicForm.value);
    console.log("as json: "+JSON.stringify(this.dynamicForm.value, null, 4));
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