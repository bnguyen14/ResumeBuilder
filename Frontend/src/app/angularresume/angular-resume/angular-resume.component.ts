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
import {AlignmentType, Document, HeadingLevel, Packer, Paragraph, TextRun} from 'docx';
import {saveAs} from 'file-saver';
import {Website} from '../../models/test/website';
import {Education} from '../../models/education';
import {Experience} from '../../models/experience';
import {Project} from '../../models/project';
import {Achievement} from '../../models/achievement';
import {Resume} from '../../models/resume';
import {General, Skills, Summary} from '../../shared/general.model';


@Component({
  selector: 'app-angular-resume',
  templateUrl: './angular-resume.component.html',
  styleUrls: ['./angular-resume.component.css']
})
export class AngularResumeComponent implements OnInit {


  maximumFormList = 3;

  dynamicForm: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  name: string;
  email: string;
  number: string;
  summary: string;
  skillDesc: string;



  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      websites: new FormArray([]),
      educations: new FormArray([]),
      experiences: new FormArray([]),
      projects: new FormArray([]),
      achievements: new FormArray([])
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
    this.projectFormArray.push(this.formBuilder.group({
      title: '',
      description: ''
    }));
    this.achievementFormArray.push(this.formBuilder.group({
      issuer: '',
      name: '',
      date: ''
    }));
  }
  // the overall form control of "dynamicForm"
  get formControl() { return this.dynamicForm.controls; }

  // use FormArray to push another form into the array
  get websiteFormArray() { return this.formControl.websites as FormArray; }
  get educationFormArray() { return this.formControl.educations as FormArray; }
  get experienceFormArray(){return this.formControl.experiences as FormArray; }
  get projectFormArray(){return this.formControl.projects as FormArray; }
  get achievementFormArray(){return this.formControl.achievements as FormArray; }

  // use in .html file to find how many forms are in a group
  get websiteFormGroup() { return this.websiteFormArray.controls as FormGroup[]; }
  get educationFormGroup() { return this.educationFormArray.controls as FormGroup[]; }
  get experienceFormGroup() { return this.experienceFormArray.controls as FormGroup[]; }
  get projectFormGroup() { return this.projectFormArray.controls as FormGroup[]; }
  get achievementFormGroup() { return this.achievementFormArray.controls as FormGroup[]; }


  // use to retrieve data from form as a list
  get websiteValue() { return this.dynamicForm.value.websites as Website[]; }
  get educationValue() { return this.dynamicForm.value.educations as Education[]; }
  get experienceValue() { return this.dynamicForm.value.experiences as Experience[]; }
  get projectValue() { return this.dynamicForm.value.experiences as Project[]; }
  get achievementValue() { return this.dynamicForm.value.experiences as Achievement[]; }

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
      case 'experience': {
        if (this.experienceFormGroup.length < this.maximumFormList){
          this .experienceFormArray.push(this.formBuilder.group({
            company: '',
            location: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            description: '',
            current: ''
          }));
        }
        break;
      }
      case 'project': {
        if (this.projectFormGroup.length < this.maximumFormList) {
          this.projectFormArray.push(this.formBuilder.group({
            title: '',
            description: ''
          }));
        }
        break;
      }
      case 'achievement': {
        if (this.achievementFormGroup.length < this.maximumFormList) {
          this.achievementFormArray.push(this.formBuilder.group({
            issuer: '',
            name: '',
            date: ''
          }));
        }
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
      case 'experience': {
        this.experienceFormArray.removeAt(i);
        break;
      }
      case 'project': {
        this.projectFormArray.removeAt(i);
        break;
      }
      case 'achievement': {
        this.achievementFormArray.removeAt(i);
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



  createNew() {
    const doc = new Document();
    doc.addSection({
      children: [
        // general
        new Paragraph({
          text: this.name,
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER
        }),
        new Paragraph({
          children: [
            new TextRun(`Phone: ${this.number} | Email: ${this.email}`).break()
          ],
          alignment: AlignmentType.CENTER
        }),
        ...this.websiteList,
        new Paragraph({
          text: this.summary,
          heading: HeadingLevel.HEADING_6,
          alignment: AlignmentType.CENTER,
          thematicBreak: true
        }),
        // education
        new Paragraph({ text: 'Education', heading: HeadingLevel.HEADING_1}),
        new Paragraph('EDUCATION ARRAY'),
        //  experience
        new Paragraph({ text: 'Experience', heading: HeadingLevel.HEADING_1}),
        new Paragraph('EXPERIENCE ARRAY'),
        //  skills
        new Paragraph({ text: 'Skills', heading: HeadingLevel.HEADING_1}),
        new Paragraph({
          text: this.skillDesc,
          heading: HeadingLevel.HEADING_4
        }),
        // projects
        new Paragraph({ text: 'Projects', heading: HeadingLevel.HEADING_1}),
        new Paragraph('PROJECTS ARRAY'),
        // achievements
        new Paragraph({ text: 'Achievements', heading: HeadingLevel.HEADING_1}),
        new Paragraph('Achievements ARRAY'),

      ]
    });

    Packer.toBlob(doc).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, 'example.docx');
    });

  }
}
