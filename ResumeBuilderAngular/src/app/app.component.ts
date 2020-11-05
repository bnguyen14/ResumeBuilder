import { Component } from '@angular/core';
import { Packer } from "docx";
import { AlignmentType, Document, HeadingLevel, Paragraph, TabStopPosition, TabStopType, TextRun } from "docx";
import { saveAs } from "file-saver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeBuilderAngular';
  something = 'test title'


  addsoemthing(){
    this.something = "soemthing else";
  }


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
      saveAs(blob, "example.docx");
    })
  }
}
