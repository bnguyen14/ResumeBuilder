import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
// import {
//   Achievements,
//   Education,
//   Experience,
//   General,
//   Projects,
//   Resume,
//   Skills,
//   Summary, Websites
// } from '../../shared/general.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {Document, HeadingLevel, Packer, Paragraph} from 'docx';
import {saveAs} from 'file-saver';
import {Website} from '../../models/test/website';
import {Education} from '../../models/education';

@Component({
  selector: 'app-angular-resume',
  templateUrl: './angular-resume.component.html',
  styleUrls: ['./angular-resume.component.css']
})
export class AngularResumeComponent implements OnInit {

  maximumFormList = 3;

  dynamicForm: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  // @Output() outputName = new EventEmitter<Resume>();
  // // General
  // @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  // @ViewChild('socialInput', {static: false}) socialInputRef: ElementRef;
  // @ViewChild('emailInput', {static: false}) emailInputRef: ElementRef;
  // @ViewChild('numberInput', {static: false}) numberInputRef: ElementRef;
  //
  // // Summary
  // @ViewChild('summary', {static: false}) summaryInputRef: ElementRef;
  //
  // // Education
  // @ViewChild('educationschool', {static: false}) schoolInputRef: ElementRef;
  // @ViewChild('educationlocation', {static: false}) schoolocRef: ElementRef;
  // @ViewChild('educationstart', {static: false}) schoolStartRef: ElementRef;
  // @ViewChild('educationend', {static: false}) schoolEndRef: ElementRef;
  // @ViewChild('educationcurrent', {static: false}) schoolCurrRef: ElementRef;
  // @ViewChild('educationdegree', {static: false}) schoolDegreeRef: ElementRef;
  //
  // // Experience
  // @ViewChild('jobcompany', {static: false}) companyInputRef: ElementRef;
  // @ViewChild('joblocation', {static: false}) jobLocRef: ElementRef;
  // @ViewChild('jobstart', {static: false}) jobStarRef: ElementRef;
  // @ViewChild('jobend', {static: false}) jobEndRef: ElementRef;
  // @ViewChild('jobcurrent', {static: false}) jobCurrRef: ElementRef;
  // @ViewChild('jobdescription', {static: false}) jobDescRef: ElementRef;
  //
  // // Skills
  // @ViewChild('skillsdescription', {static: false}) skillDescRef: ElementRef;
  //
  // // Projects
  // @ViewChild('projecttitle', {static: false}) projectTitleRef: ElementRef;
  // @ViewChild('projectdescription', {static: false}) projectDescRef: ElementRef;
  //
  // // Achievements
  // @ViewChild('achievementissuer', {static: false}) achievementIssRef: ElementRef;
  // @ViewChild('achievementname', {static: false}) achievementNameRef: ElementRef;
  // @ViewChild('achievementdate', {static: false}) achievementDateRef: ElementRef;
  //
  // // Website
  // @ViewChild('website', {static: false}) webSiteRef: ElementRef;

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      websites: new FormArray([]),
      educations: new FormArray([]),
      experiences: new FormArray([])
    });
    // the first form initialized for "website"
    this.websiteFormArray.push(this.formBuilder.group({
      website : ''
    }));
    this.educationFormArray.push(this.formBuilder.group({
      school: '',
      location: '',
      startDate: '',
      endDate: '',
      degree: '',
      current: ''
    }));
    this.experienceFormArray.push(this.formBuilder.group({
      company: '',
      location: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      description: '',
      current: ''
    }));
  }
  // the overall form control of "dynamicForm"
  get formControl() { return this.dynamicForm.controls; }

  // use FormArray to push another form into the array
  get websiteFormArray() { return this.formControl.websites as FormArray; }
  get educationFormArray() { return this.formControl.educations as FormArray; }
  get experienceFormArray(){return this.formControl.experiences as FormArray; }
  // use in .html file to find how many forms are in a group
  get websiteFormGroup() { return this.websiteFormArray.controls as FormGroup[]; }
  get educationFormGroup() { return this.educationFormArray.controls as FormGroup[]; }

  // use to retrieve data from form as a list
  get websiteValue() { return this.dynamicForm.value.websites as Website[]; }
  get educationValue() { return this.dynamicForm.value.educations as Education[]; }

  // retrieves data websiteValue() and insert each element as text in a new paragraph. returns as list of paragraph
  get websiteList() {

    const tmparr = this.websiteValue;
    const paragraphOut: Paragraph[] = [];

    for (const test of tmparr) {
      console.log(test.website);
      paragraphOut.push(new Paragraph({
        text : test.website
      }));
    }

    return paragraphOut;
  }


  // adds another set of the form in the specific category
  incrementList(category: string){
    switch (category){
      case 'website': {
        if (this.websiteFormGroup.length < this.maximumFormList){
          this.websiteFormArray.push(this.formBuilder.group({
            website : ''
          }));
        }
        break;
      }
      case 'education': {
        if (this.educationFormGroup.length < this.maximumFormList){
          this.educationFormArray.push(this.formBuilder.group({
            school: '',
            location: '',
            startDate: '',
            endDate: '',
            degree: '',
            current: ''
          }));
        }
        break;
      }
    }
  }

  // deletes a set of form that is initialized on the webpage
  decrementList(category: string, i: number){
    switch (category){
      case 'website': {
        this.websiteFormArray.removeAt(i);
        break;
      }
      case 'education': {
        this.educationFormArray.removeAt(i);
        break;
      }
    }
  }

  printResume(){
    console.log('as value: ' + this.dynamicForm.value);
    console.log('as json: ' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  download(){
    const document = new Document();

    document.addSection({
      children: [
        ...this.websiteList
      ]
    });

    Packer.toBlob(document).then(blob => {
      saveAs(blob, 'example.docx');
    });
  }

  // sendName() {
  //
  //   // General
  //   const nameInput = this.nameInputRef.nativeElement.value;
  //   const socialInput = this.socialInputRef.nativeElement.value;
  //   const emailInput = this.emailInputRef.nativeElement.value;
  //   const numberInput = this.numberInputRef.nativeElement.value;
  //
  //   // Summary
  //   const summaryInput = this.summaryInputRef.nativeElement.value;
  //
  //   // Education
  //   const schoolInput = this.schoolInputRef.nativeElement.value;
  //   const schoolLocation = this.schoolocRef.nativeElement.value;
  //   const schoolStart = new Date(this.schoolStartRef.nativeElement.value);
  //   const schoolEnd = new Date(this.schoolEndRef.nativeElement.value);
  //   const schoolCurrent = this.schoolCurrRef.nativeElement.value;
  //   const degree = this.schoolDegreeRef.nativeElement.value;
  //
  //   // Experience
  //   const jobInput = this.companyInputRef.nativeElement.value;
  //   const jobLocation = this.jobLocRef.nativeElement.value;
  //   const jobStart = new Date(this.jobStarRef.nativeElement.value);
  //   const jobEnd = new Date(this.jobEndRef.nativeElement.value);
  //   const jobCurrent = this.jobCurrRef.nativeElement.value;
  //   const jobDesc = this.jobDescRef.nativeElement.value;
  //
  //   // Skills
  //   const skillDesc = this.skillDescRef.nativeElement.value;
  //
  //   // Projects
  //   const projectTitle = this.projectTitleRef.nativeElement.value;
  //   const projectDesc = this.projectDescRef.nativeElement.value;
  //
  //   // Achievements
  //   const achievementIssuer = this.achievementIssRef.nativeElement.value;
  //   const achievementDate = new Date(this.achievementDateRef.nativeElement.value);
  //   const achievementName = this.achievementNameRef.nativeElement.value;
  //
  //   // Website
  //   const websiteInput = this.webSiteRef.nativeElement.value;
  //
  //
  //   const general = new General(nameInput, socialInput, emailInput, numberInput);
  //   const summary = new Summary(summaryInput);
  //   const education = [new Education(schoolInput, schoolLocation, schoolStart, schoolEnd, schoolCurrent, degree)];
  //   const experience = [new Experience(jobInput, jobLocation, jobStart, jobEnd, jobCurrent, jobDesc)];
  //   const skills = new Skills(skillDesc);
  //   const projects = [new Projects(projectTitle, projectDesc)];
  //   const achievements = [new Achievements(achievementIssuer, achievementName, achievementDate)];
  //   const websites = new Websites(websiteInput);
  //
  //
  //   // console.log(general.name);
  //   // console.log(general.socials);
  //   // console.log(general.email);
  //   // console.log(general.phoneNumber);
  //
  //   const resume = new Resume(general, summary, education, experience, skills, projects, achievements, websites);
  //   this.outputName.emit(resume);
  // }

}
