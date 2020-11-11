import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {
  Achievements,
  Education,
  Experience,
  General,
  Projects,
  Resume,
  Skills,
  Summary, Websites
} from '../../shared/general.model';

@Component({
  selector: 'app-angular-resume',
  templateUrl: './angular-resume.component.html',
  styleUrls: ['./angular-resume.component.css']
})
export class AngularResumeComponent implements OnInit {

  @Output() outputName = new EventEmitter<Resume>();
  // General
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('socialInput', {static: false}) socialInputRef: ElementRef;
  @ViewChild('emailInput', {static: false}) emailInputRef: ElementRef;
  @ViewChild('numberInput', {static: false}) numberInputRef: ElementRef;

  // Summary
  @ViewChild('summary', {static: false}) summaryInputRef: ElementRef;

  // Education
  @ViewChild('educationschool', {static: false}) schoolInputRef: ElementRef;
  @ViewChild('educationlocation', {static: false}) schoolocRef: ElementRef;
  @ViewChild('educationstart', {static: false}) schoolStartRef: ElementRef;
  @ViewChild('educationend', {static: false}) schoolEndRef: ElementRef;
  @ViewChild('educationcurrent', {static: false}) schoolCurrRef: ElementRef;
  @ViewChild('educationdegree', {static: false}) schoolDegreeRef: ElementRef;

  // Experience
  @ViewChild('jobcompany', {static: false}) companyInputRef: ElementRef;
  @ViewChild('joblocation', {static: false}) jobLocRef: ElementRef;
  @ViewChild('jobstart', {static: false}) jobStarRef: ElementRef;
  @ViewChild('jobend', {static: false}) jobEndRef: ElementRef;
  @ViewChild('jobcurrent', {static: false}) jobCurrRef: ElementRef;
  @ViewChild('jobdescription', {static: false}) jobDescRef: ElementRef;

  // Skills
  @ViewChild('skillsdescription', {static: false}) skillDescRef: ElementRef;

  // Projects
  @ViewChild('projecttitle', {static: false}) projectTitleRef: ElementRef;
  @ViewChild('projectdescription', {static: false}) projectDescRef: ElementRef;

  // Achievements
  @ViewChild('achievementissuer', {static: false}) achievementIssRef: ElementRef;
  @ViewChild('achievementname', {static: false}) achievementNameRef: ElementRef;
  @ViewChild('achievementdate', {static: false}) achievementDateRef: ElementRef;

  // Website
  @ViewChild('website', {static: false}) webSiteRef: ElementRef;


  constructor() {

  }

  ngOnInit(): void {
  }


  sendName() {

    // General
    const nameInput = this.nameInputRef.nativeElement.value;
    const socialInput = this.socialInputRef.nativeElement.value;
    const emailInput = this.emailInputRef.nativeElement.value;
    const numberInput = this.numberInputRef.nativeElement.value;

    // Summary
    const summaryInput = this.summaryInputRef.nativeElement.value;

    // Education
    const schoolInput = this.schoolInputRef.nativeElement.value;
    const schoolLocation = this.schoolocRef.nativeElement.value;
    const schoolStart = new Date(this.schoolStartRef.nativeElement.value);
    const schoolEnd = new Date(this.schoolEndRef.nativeElement.value);
    const schoolCurrent = this.schoolCurrRef.nativeElement.value;
    const degree = this.schoolDegreeRef.nativeElement.value;

    // Experience
    const jobInput = this.companyInputRef.nativeElement.value;
    const jobLocation = this.jobLocRef.nativeElement.value;
    const jobStart = new Date(this.jobStarRef.nativeElement.value);
    const jobEnd = new Date(this.jobEndRef.nativeElement.value);
    const jobCurrent = this.jobCurrRef.nativeElement.value;
    const jobDesc = this.jobDescRef.nativeElement.value;

    // Skills
    const skillDesc = this.skillDescRef.nativeElement.value;

    // Projects
    const projectTitle = this.projectTitleRef.nativeElement.value;
    const projectDesc = this.projectDescRef.nativeElement.value;

    // Achievements
    const achievementIssuer = this.achievementIssRef.nativeElement.value;
    const achievementDate = new Date(this.achievementDateRef.nativeElement.value);
    const achievementName = this.achievementNameRef.nativeElement.value;

    // Website
    const websiteInput = this.webSiteRef.nativeElement.value;


    const general = new General(nameInput, socialInput, emailInput, numberInput);
    const summary = new Summary(summaryInput);
    const education = [new Education(schoolInput, schoolLocation, schoolStart, schoolEnd, schoolCurrent, degree)];
    const experience = [new Experience(jobInput, jobLocation, jobStart, jobEnd, jobCurrent, jobDesc)];
    const skills = new Skills(skillDesc);
    const projects = [new Projects(projectTitle, projectDesc)];
    const achievements = [new Achievements(achievementIssuer, achievementName, achievementDate)];
    const websites = new Websites(websiteInput);


    // console.log(general.name);
    // console.log(general.socials);
    // console.log(general.email);
    // console.log(general.phoneNumber);

    const resume = new Resume(general, summary, education, experience, skills, projects, achievements, websites);
    this.outputName.emit(resume);
  }

}
