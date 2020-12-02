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
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun} from 'docx';
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
      basic: new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        location: new FormControl(''),
        summary: new FormControl(''),
        skills: new FormControl(''),
      }),
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
  get basicFormGroup() { return this.dynamicForm.controls.basic as FormGroup; }
  get websiteFormGroup() { return this.websiteFormArray.controls as FormGroup[]; }
  get educationFormGroup() { return this.educationFormArray.controls as FormGroup[]; }
  get experienceFormGroup() { return this.experienceFormArray.controls as FormGroup[]; }
  get projectFormGroup() { return this.projectFormArray.controls as FormGroup[]; }
  get achievementFormGroup() { return this.achievementFormArray.controls as FormGroup[]; }

  // use to retrieve data from basic form
  get basicFormValue() { return this.dynamicForm.controls.basic.value; }

  // use to retrieve data from form as a list
  get websiteValue() { return this.dynamicForm.value.websites as Website[]; }
  get educationValue() { return this.dynamicForm.value.educations as Education[]; }
  get experienceValue() { return this.dynamicForm.value.experiences as Experience[]; }
  get projectValue() { return this.dynamicForm.value.projects as Project[]; }
  get achievementValue() { return this.dynamicForm.value.achievements as Achievement[]; }

  // retrieves data websiteValue() and insert each element as text in a new paragraph. returns as list of paragraph
  get websiteList() {

    const tmparr = this.websiteValue;
    const paragraphOut: Paragraph[] = [];

    for (const test of tmparr) {
      console.log('website: ' + this.basicFormValue.website);
      paragraphOut.push(new Paragraph({
        text : this.basicFormValue.website
      }));
    }
    return paragraphOut;
  }

  get educationList() {
    const tmparr = this.educationValue;
    const paragraphOut: Paragraph[] = [];

    for (const test of tmparr) {
      const startDateFormat: string = new Date(test.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short'});
      const endDateFormat: string = new Date(test.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short'});

      console.log(test.degree);
      paragraphOut.push(new Paragraph({

          tabStops: [
            {
              type: TabStopType.RIGHT,
              position: TabStopPosition.MAX,
            },
          ],
          children: [
            new TextRun({
              text: test.school,
              bold: true,
            }),
            new TextRun({
              text: `\t${startDateFormat} to ${endDateFormat}`,
              bold: true,
            }), ]
      }));
      paragraphOut.push(new Paragraph( {
        children: [
          new TextRun({
            text: test.location,
            italics: true
          }),
        ]
      }));
      paragraphOut.push(new Paragraph({

      children: [
        new TextRun({
          text: `${test.degree}`,
        }),
        ]
  }));

      // text: `Location: ${test.location}`,
    }
    return paragraphOut;
  }

  get projectList() {
    const tmparr = this.projectValue;
    const paragraphOut: Paragraph[] = [];


    for (const test of tmparr) {
      console.log(test.title);
      paragraphOut.push(new Paragraph({
          children: [
            new TextRun({
              text: `${test.title}`,
              bold: true,
            }),
          ]
      }));
      paragraphOut.push(new Paragraph({

        children: [
          new TextRun({
            text: `${test.description}`,
          })
          ]
    }));
      paragraphOut.push(new Paragraph({}));
    }
    return paragraphOut;
  }

  get achievementList() {
    const tmparr = this.achievementValue;
    const paragraphOut: Paragraph[] = [];


    for (const test of tmparr) {
      const dateFormat: string = new Date(test.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short'});
      paragraphOut.push(new Paragraph({
        tabStops: [
          {
            type: TabStopType.RIGHT,
            position: TabStopPosition.MAX,
          },
        ],
        children: [
          new TextRun({
            text: `${test.name}`,
            bold: true,
          }),
        new TextRun({
          text: `\t${dateFormat}`,
          bold: true
        })]
      }));
      paragraphOut.push(new Paragraph({
        children: [
          new TextRun({
            text: `${test.issuer}`,
            italics: true
          })
        ]
      }));
      paragraphOut.push(new Paragraph({}));
    }
    return paragraphOut;
  }



  get experienceList() {
    const tmparr = this.experienceValue;
    const paragraphOut: Paragraph[] = [];

    for (const test of tmparr) {

      const startDateFormat: string = new Date(test.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short'});
      const endDateFormat: string = new Date(test.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short'});
      paragraphOut.push(new Paragraph({

        tabStops: [
          {
            type: TabStopType.RIGHT,
            position: TabStopPosition.MAX,
          },
        ],
        children: [
          new TextRun({
            text: `Company: ${test.company}`,
            bold: true,
          }),
          new TextRun({
            text: `\t${startDateFormat} to ${endDateFormat}`,
            bold: true,
          }), ]
      }));
      paragraphOut.push(new Paragraph({

        children: [
          new TextRun({
            text: `Location: ${test.location}`,
          }),
        ]
      }));
      paragraphOut.push(new Paragraph({

        children: [
          new TextRun({
            text: `Job Title: ${test.jobTitle}`,
          }),
        ]
      }));
      paragraphOut.push(new Paragraph({

        children: [
          new TextRun({
            text: `Job Description: ${test.description}`,
          }),
        ]
      }));
      // text: `Location: ${test.location}`,
    }
    return paragraphOut;
  }


  // adds another set of the form in the specific category
  incrementList(category: string){
    switch (category){
      // case 'website': {
      //   if (this.websiteFormGroup.length < this.maximumFormList){
      //     this.websiteFormArray.push(this.formBuilder.group({
      //       website : ''
      //     }));
      //   }
      //   break;
      // }
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
    console.log(this.basicFormValue.name);
    console.log(this.basicFormValue.email);
    console.log(this.basicFormValue.summary);
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
          text: this.basicFormValue.name,
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER
        }),
        new Paragraph({
          children: [
            new TextRun(`Email: ${this.basicFormValue.email}`).break()
          ],
          alignment: AlignmentType.CENTER
        }),
        ...this.websiteList,
        new Paragraph({
          text: `${this.summary}`,
          heading: HeadingLevel.HEADING_6,
          thematicBreak: true
        }),
        // education
        new Paragraph({ text: 'Education',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        thematicBreak: true}),
        ...this.educationList,
        //  experience
        new Paragraph({ text: 'Experience',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        thematicBreak: true}),
        ...this.experienceList,
        //  skills
        new Paragraph({ text: 'Skills',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        thematicBreak: true}),
        new Paragraph({
          text: this.basicFormValue.skills,
          heading: HeadingLevel.HEADING_4
        }),
        // projects
        new Paragraph({ text: 'Projects',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        thematicBreak: true}),
        ...this.projectList,
        // achievements
        new Paragraph({ text: 'Achievements',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        thematicBreak: true}),
        ...this.achievementList,

      ]
    });

    Packer.toBlob(doc).then((blob) => {
      let fileName: string;

      // saveAs from FileSaver will download the file
      if (this.basicFormValue.name.includes(' '))
      {
        fileName = this.basicFormValue.name.replace(' ', '_');
      }
      else {
        fileName = this.basicFormValue.name;
      }
      saveAs(blob, fileName + '.docx');
    });

  }
}
