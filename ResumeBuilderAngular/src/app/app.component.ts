import { Component } from '@angular/core';
import { Packer } from 'docx';
import { AlignmentType, Document, HeadingLevel, Paragraph, TabStopPosition, TabStopType, TextRun } from "docx";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeBuilderAngular';
  something = 'test title';

  newOutputName: {name: string, socials: string, email: string, phoneNumber: string};

  download(){
    const document = new Document();
    document.addSection({
      children: [
        new Paragraph({
          text: this.something,
          heading: HeadingLevel.HEADING_1
        }),

      ]
    });

    Packer.toBlob(document).then(blob => {
      saveAs(blob, 'example.docx');
    });
  }


  display(name) {
    this.newOutputName = name;
    console.log('name: ' + name);
    this.createNew();
  }



  createNew() {
    const doc = new Document();
    doc.addSection({
      children: [
        new Paragraph({
          text: this.newOutputName.name,
          heading: HeadingLevel.HEADING_1
        }),
        new Paragraph({
          text: this.newOutputName.socials,
          heading: HeadingLevel.HEADING_2
        }),
        new Paragraph({
          text: this.newOutputName.email,
          heading: HeadingLevel.HEADING_2
        }),
        new Paragraph({
          text: this.newOutputName.phoneNumber,
          heading: HeadingLevel.HEADING_2
        })
      ]
    });

    Packer.toBlob(doc).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, 'example.docx');
    });

  }

}
