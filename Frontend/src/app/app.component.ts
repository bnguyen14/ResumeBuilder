import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Document, HeadingLevel, Packer, Paragraph} from 'docx';
import {saveAs} from 'file-saver';
import {AppService} from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeBuilderAngular';
  something = 'test title';
  resumes: any[] = [
    {"id": 1,"resumeName": "Resume 1",date: "1/12/2020"},
    {"id": 2,"resumeName": "Resume 2",date: "1/12/2020"},
    {"id": 3,"resumeName": "Resume 3",date: "1/12/2020"},
    {"id": 4,"resumeName": "Resume 4",date: "1/12/2020"},
    {"id": 5,"resumeName": "Resume 5",date: "1/12/2020"}
  ];
  

  constructor( public appService: AppService, public router: Router) {
  }

  navigateToLogin(){
      this.router.navigate(['/']);
    }

  
  
  // register: {}
  // login: {}

  // newOutputName: {general: General, summary: Summary,
  //                  education: Education[], experience: Experience[],
  //                  skills: Skills, projects: Projects[],
  //                  achievements: Achievements[], websites: Websites};

  // download(){
  //   const document = new Document();
  //   document.addSection({
  //     children: [
  //       new Paragraph({
  //         text: this.something,
  //         heading: HeadingLevel.HEADING_1
  //       }),

  //     ]
  //   });

  //   Packer.toBlob(document).then(blob => {
  //     saveAs(blob, 'example.docx');
  //   });
  // }


  // display(name) {
  //   this.newOutputName = {...name};
  //   console.log('name: ' + this.newOutputName.general.phoneNumber);
  //   this.createNew();
  // }



  // createNew() {
  //   const doc = new Document();
  //   doc.addSection({
  //     children: [
  //       // general
  //       new Paragraph({
  //         text: this.newOutputName.general.name,
  //         heading: HeadingLevel.HEADING_1
  //       }),
  //       new Paragraph({
  //         text: this.newOutputName.general.socials,
  //         heading: HeadingLevel.HEADING_2
  //       }),
  //       new Paragraph({
  //         text: this.newOutputName.general.email,
  //         heading: HeadingLevel.HEADING_2
  //       }),
  //       new Paragraph({
  //         text: this.newOutputName.general.phoneNumber,
  //         heading: HeadingLevel.HEADING_2
  //       }),
  //       // summary
  //       new Paragraph({
  //         text: this.newOutputName.summary.summary,
  //         heading: HeadingLevel.HEADING_1
  //       }),
  //       // education
  //       new Paragraph({ text: 'Education', heading: HeadingLevel.HEADING_1}),
  //       new Paragraph('EDUCATION ARRAY'),
  //     //  experience
  //       new Paragraph({ text: 'Experience', heading: HeadingLevel.HEADING_1}),
  //       new Paragraph('EXPERIENCE ARRAY'),
  //     //  skills
  //       new Paragraph({ text: 'Skills', heading: HeadingLevel.HEADING_1}),
  //       new Paragraph({
  //         text: this.newOutputName.skills.description,
  //         heading: HeadingLevel.HEADING_4
  //       }),
  //       // projects
  //       new Paragraph({ text: 'Projects', heading: HeadingLevel.HEADING_1}),
  //       new Paragraph('PROJECTS ARRAY'),
  //       // achievements
  //       new Paragraph({ text: 'Achievements', heading: HeadingLevel.HEADING_1}),
  //       new Paragraph('Achievements ARRAY'),
  //       // websites
  //       new Paragraph({ text: 'Websites', heading: HeadingLevel.HEADING_1}),
  //       new Paragraph({
  //         text: this.newOutputName.websites.website,
  //         heading: HeadingLevel.HEADING_4
  //       }),

  //     ]
  //   });

  //   Packer.toBlob(doc).then((blob) => {
  //     // saveAs from FileSaver will download the file
  //     saveAs(blob, 'example.docx');
  //   });

  // }

}
