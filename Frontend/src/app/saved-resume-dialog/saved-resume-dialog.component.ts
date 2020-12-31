import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-saved-resume-dialog',
  templateUrl: './saved-resume-dialog.component.html',
  styleUrls: ['./saved-resume-dialog.component.css']
})
export class SavedResumeDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<SavedResumeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialog.close();
  }

}
