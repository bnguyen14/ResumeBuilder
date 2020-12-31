import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { Website } from '../../models/website';
import { Education } from '../../models/education';
import { Experience } from '../../models/experience';
import { Project } from '../../models/project';
import { Achievement } from '../../models/achievement';
import { Resume } from '../../models/resume';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ResumeService } from 'src/app/services/resume.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThisReceiver } from '@angular/compiler';
import { SavedResumeDialogComponent } from 'src/app/saved-resume-dialog/saved-resume-dialog.component';

@Component({
  selector: 'app-angular-resume',
  templateUrl: './angular-resume.component.html',
  styleUrls: ['./angular-resume.component.css'],
  // encapsulation: ViewEncapsulation.None
  providers: [DatePipe]
})
export class AngularResumeComponent implements OnInit {


  maximumFormList = 3;
  // resumes: any[] = [
  //   {"id": 1,"resumeName": "Resume 1",date: "1/12/2020"},
  //   {"id": 2,"resumeName": "Resume 2",date: "1/12/2020"},
  //   {"id": 3,"resumeName": "Resume 3",date: "1/12/2020"},
  //   {"id": 4,"resumeName": "Resume 4",date: "1/12/2020"},
  //   {"id": 5,"resumeName": "Resume 5",date: "1/12/2020"}
  // ];

  dynamicForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private resumeService: ResumeService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }


  savedResumeName: string;
  // name: string;
  // email: string;
  // number: string;
  // summary: string;
  // skillDesc: string;

  // testing purposes
  // resume: Resume;

  openDialog() {
    let dialogRef = this.dialog.open(SavedResumeDialogComponent, {
      data: { resumeName: this.savedResumeName }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.savedResumeName = result;
      console.log("Resume name: " + this.savedResumeName);
      this.saveResume();
    }

    )
  }

  ngOnInit(): void {
    if (this.userService.authentication == false) {
      this.router.navigate(['']);
    }
    this.resumeService.resume.subscribe(
      (resume) => {
        console.log(resume);
        // console.log(resume[0].name);
        //Saved Resume edit basic info
        this.basicFormGroup.setValue({
          name: resume[0].name,
          email: resume[0].email,
          location: resume[0].location,
          summary: resume[0].summary,
          skills: resume[0].skills
        });

        // Saved resume edit website info
        if (resume[0].websites.length > 0) {
          this.websiteFormGroup[0].setValue({
            site: resume[0].websites[0].site,

          });

          for (let i = 1; i < resume[0].websites.length; i++) {
            this.incrementList('website')
            this.websiteFormGroup[i].setValue({
              site: resume[0].websites[i].site,
            });
          }
        }

        // saved resume education edit info
        if (resume[0].websites.length > 0) {
          this.educationFormGroup[0].setValue({
            school: resume[0].educationList[0].school,
            location: resume[0].educationList[0].location,
            startDate: resume[0].educationList[0].startDate,
            endDate: { value: resume[0].educationList[0].endDate, disabled: false },
            degree: resume[0].educationList[0].degree,
            current: resume[0].educationList[0].current,

          });

          for (let i = 1; i < resume[0].educationList.length; i++) {
            this.incrementList('education')
            this.educationFormGroup[i].setValue({
              school: resume[0].educationList[i].school,
              location: resume[0].educationList[i].location,
              startDate: resume[0].educationList[i].startDate,
              endDate: { value: resume[0].educationList[i].endDate, disabled: false },
              degree: resume[0].educationList[i].degree,
              current: resume[0].educationList[i].current,
            });
          }
        }
        //saved resume experience edit info
        if (resume[0].websites.length > 0) {
          this.experienceFormGroup[0].setValue({
            company: resume[0].experiences[0].company,
            location: resume[0].experiences[0].location,
            jobTitle: resume[0].experiences[0].jobTitle,
            startDate: resume[0].experiences[0].startDate,
            endDate: { value: resume[0].experiences[0].endDate, disabled: false },
            description: resume[0].experiences[0].description,
            current: resume[0].experiences[0].current

          });

          for (let i = 1; i < resume[0].experiences.length; i++) {
            this.incrementList('experience')
            this.experienceFormGroup[i].setValue({
              company: resume[0].experiences[i].company,
              location: resume[0].experiences[i].location,
              jobTitle: resume[0].experiences[i].jobTitle,
              startDate: resume[0].experiences[i].startDate,
              endDate: { value: resume[0].experiences[i].endDate, disabled: false },
              description: resume[0].experiences[i].description,
              current: resume[0].experiences[i].current
            });
          }
        }

        // Saved resume project info
        if (resume[0].websites.length > 0) {
          this.projectFormGroup[0].setValue({
            title: resume[0].projects[0].title,
            description: resume[0].projects[0].description,

          });

          for (let i = 1; i < resume[0].projects.length; i++) {
            this.incrementList('project')
            this.projectFormGroup[i].setValue({
              title: resume[0].projects[i].title,
              description: resume[0].projects[i].description,
            });
          }
        }

        // saved resume achievments info
        if (resume[0].websites.length > 0) {
          this.achievementFormGroup[0].setValue({
            issuer: resume[0].achievements[0].issuer,
            name: resume[0].achievements[0].name,
            date: resume[0].achievements[0].date

          });

          for (let i = 1; i < resume[0].achievements.length; i++) {
            this.incrementList('achievement')
            this.achievementFormGroup[i].setValue({
              issuer: resume[0].achievements[i].issuer,
              name: resume[0].achievements[i].name,
              date: resume[0].achievements[i].date

            });
          }
        }



      }
    )
    this.initializeForm();
  }
  // the overall form control of "dynamicForm"
  get formControl() { return this.dynamicForm.controls; }

  // use FormArray to push another form into the array
  get websiteFormArray() { return this.formControl.websites as FormArray; }
  get educationFormArray() { return this.formControl.educations as FormArray; }
  get experienceFormArray() { return this.formControl.experiences as FormArray; }
  get projectFormArray() { return this.formControl.projects as FormArray; }
  get achievementFormArray() { return this.formControl.achievements as FormArray; }
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

  //generates snakbar
  openSnackBar() {
    this._snackBar.open("Resume Saved", "Dismiss", {
      duration: 2000,
    });

  }

  //initializes form controls and arrays and pushes the first set of forms onto each
  initializeForm() {
    this.dynamicForm = this.formBuilder.group({
      basic: new FormGroup({
        name: new FormControl('', [Validators.required, Validators.email]),
        email: new FormControl('', [Validators.required, Validators.email]),
        location: new FormControl('', [Validators.required, Validators.email]),
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
      site: ''
    }));
    this.educationFormArray.push(this.formBuilder.group({
      school: '',
      location: '',
      startDate: '',
      endDate: { value: null, disabled: false },
      degree: '',
      current: ''
    }));
    this.experienceFormArray.push(this.formBuilder.group({
      company: '',
      location: '',
      jobTitle: '',
      startDate: '',
      endDate: { value: null, disabled: false },
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

  // adds another set of the form in the specific category
  incrementList(category: string) {
    switch (category) {
      case 'website': {
        if (this.websiteFormGroup.length < this.maximumFormList) {
          this.websiteFormArray.push(this.formBuilder.group({
            site: ''
          }));
        }
        break;
      }
      case 'education': {
        if (this.educationFormGroup.length < this.maximumFormList) {
          this.educationFormArray.push(this.formBuilder.group({
            school: '',
            location: '',
            startDate: '',
            endDate: { value: null, disabled: false },
            degree: '',
            current: ''
          }));
        }
        break;
      }
      case 'experience': {
        if (this.experienceFormGroup.length < this.maximumFormList) {
          this.experienceFormArray.push(this.formBuilder.group({
            company: '',
            location: '',
            jobTitle: '',
            startDate: '',
            endDate: { value: null, disabled: false },
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
  decrementList(category: string, i: number) {
    switch (category) {
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

  //disables end date when current checkbox is checked
  toggleEndDate(category: string, i: number) {
    switch (category) {
      case 'education': {
        if (this.educationFormGroup[i].get('endDate').disabled) {
          this.educationFormGroup[i].get('endDate').enable();
        } else {
          this.educationFormGroup[i].get('endDate').disable();
        }
        break;
      }
      case 'experience': {
        if (this.experienceFormGroup[i].get('endDate').disabled) {
          this.experienceFormGroup[i].get('endDate').enable();
        } else {
          this.experienceFormGroup[i].get('endDate').disable();
        }
        break;
      }
    }
  }

  //performs post request for resume
  saveResume() {
    this.resumeService.saveResume(this.createResumeObject()).subscribe(
      (resume) => {
        if (resume) {
          this.openSnackBar();
          this.resumeService.resumeSaves.push({
              resumeID: resume.resumeId,
              resumeName: resume.resumeName,
              saveDate: resume.save_date
            })
        }
      }
    )
  }

  //self explanitory
  downloadResume() {
    this.createNew(this.createResumeObject());
  }

  //restreives resume from form
  createResumeObject(): Resume {
    let resume = new Resume(0,this.savedResumeName, this.basicFormValue.name, this.basicFormValue.email, this.basicFormValue.location,
      this.basicFormValue.summary, this.basicFormValue.skills, this.achievementValue, this.educationValue,
      this.experienceValue, this.projectValue, this.websiteValue, undefined, this.userService.user);
    // console.log(this.userService.user);
    // console.log(this.userService.user.userID);
    console.log(resume);
    return resume;
  }

  //takes a resume and creates Documents based on resume object passed
  createNew(resume: Resume) {
    const doc = new Document();
    doc.addSection({
      children: [
        // general
        new Paragraph({
          text: resume.name,
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER
        }),
        new Paragraph({
          children: [
            new TextRun(`Email: ${resume.email}`).break()
          ],
          alignment: AlignmentType.CENTER
        }),
        new Paragraph({
          children: [
            new TextRun(`Location: ${resume.location}`).break()
          ],
          alignment: AlignmentType.CENTER
        }),
        ...this.websiteList(resume.websites),
        new Paragraph({
          text: `${resume.summary}`,
          heading: HeadingLevel.HEADING_6,
          thematicBreak: true
        }),
        // education
        new Paragraph({
          text: 'Education',
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          thematicBreak: true
        }),
        ...this.educationList(resume.educationList),
        //  experience
        new Paragraph({ text: 'Experience',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        thematicBreak: true}),
        ...this.experienceList(resume.experiences),
        //  skills
        new Paragraph({
          text: 'Skills',
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          thematicBreak: true
        }),
        new Paragraph({
          text: resume.skills,
          heading: HeadingLevel.HEADING_4
        }),
        // projects
        new Paragraph({
          text: 'Projects',
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          thematicBreak: true
        }),
        ...this.projectList(resume.projects),
        // achievements
        new Paragraph({
          text: 'Achievements',
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          thematicBreak: true
        }),
        ...this.achievementList(resume.achievements),
      ]
    });

    Packer.toBlob(doc).then((blob) => {
      let fileName: string;

      // saveAs from FileSaver will download the file
      if (this.basicFormValue.name.includes(' ')) {
        fileName = this.basicFormValue.name.replace(' ', '_');
      }
      else {
        fileName = this.basicFormValue.name;
      }
      saveAs(blob, fileName + '.docx');
    });
  }

  // retrieves data websiteValue() and insert each element as text in a new paragraph. returns as list of paragraph
  websiteList(websiteArr: Website[]) {

    // const tmparr = this.websiteValue;
    const paragraphOut: Paragraph[] = [];

    for (const test of websiteArr) {
      console.log('website: ' + test);
      paragraphOut.push(new Paragraph({
        text: test.site,
        alignment: AlignmentType.CENTER
      }));
    }
    return paragraphOut;
  }

  educationList(educationArr: Education[]) {
    // const tmparr = this.educationValue;
    const paragraphOut: Paragraph[] = [];
    for (const test of educationArr) {
      const startDateFormat: string = new Date(test.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
      let endDateFormat: string = new Date(test.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
      if(test.current === true){
        endDateFormat = "current"      
      }
  
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
          }),]
      }));
      paragraphOut.push(new Paragraph({
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

  projectList(projectArr: Project[]) {
    // const tmparr = this.projectValue;
    const paragraphOut: Paragraph[] = [];


    for (const test of projectArr) {
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

  achievementList(achievementArr: Achievement[]) {
    // const tmparr = this.achievementValue;
    const paragraphOut: Paragraph[] = [];


    for (const test of achievementArr) {
      const dateFormat: string = new Date(test.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
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



  experienceList(experienceArr: Experience[]) {
    // const tmparr = this.experienceValue;
    const paragraphOut: Paragraph[] = [];

    for (const test of experienceArr) {

      const startDateFormat: string = new Date(test.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
      // const endDateFormat: string = new Date(test.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
      let endDateFormat: string = new Date(test.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
      if(test.current === true){
        endDateFormat = "current"
       }
      
      paragraphOut.push(new Paragraph({

        tabStops: [
          {
            type: TabStopType.RIGHT,
            position: TabStopPosition.MAX,
          },
        ],
        children: [
          new TextRun({
            text: `${test.company}`,
            bold: true,
          }),
          new TextRun({
            text: `\t${startDateFormat} to ${endDateFormat}`,
            bold: true,
          }),]
      }));
      paragraphOut.push(new Paragraph({

        children: [
          new TextRun({
            text: `${test.location}`,
          }),
        ]
      }));
      paragraphOut.push(new Paragraph({

        children: [
          new TextRun({
            text: `${test.jobTitle}`,
          }),
        ]
      }));
      paragraphOut.push(new Paragraph({

        children: [
          new TextRun({
            text: `${test.description}`,
          }),
        ]
      }));
      // text: `Location: ${test.location}`,
    }
    return paragraphOut;
  }
}
