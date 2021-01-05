import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Resumesave } from '../models/resumesave';
import { ResumeService } from '../services/resume.service';


@Component({
  selector: 'app-saved-resume-dialog',
  templateUrl: './saved-resume-dialog.component.html',
  styleUrls: ['./saved-resume-dialog.component.css']
})
export class SavedResumeDialogComponent implements OnInit {

  resumeSaveList:Resumesave[];
  idSelection = 0;
  confirmOverwrite : boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public dialog: MatDialogRef<SavedResumeDialogComponent>,
    public confirmDialog: MatDialog,
    private resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this.resumeSaveList=this.resumeService.resumeSaves;
  }

  onCloseClick(): void {
    this.dialog.close();
  }
  onSaveClick(){
    console.log(this.checkListOfSave());
    if(this.checkListOfSave()){
      console.log('opening confirm');
      let dialogRef = this.confirmDialog.open(ConfirmDialogComponent, {
        data: { 
          resumeName: this.data.resumeName,

        }
      });
      dialogRef.afterClosed().subscribe(
        result => {
          if(result){
            // this.data.confirmOverwrite = true;
            this.dialog.close({
              resumeName: this.data.resumeName,
              overwrite: true,
              resumeID: this.idSelection
            })
          }
        }
      )
    }else{
      this.dialog.close({
        resumeName: this.data.resumeName,
        overwrite: false
      });
    }
  }
  selectCard(selection:string,id:number){
    this.data.resumeName=selection;
    this.idSelection=id;
  }
  checkListOfSave():boolean{
    for(let save of this.resumeSaveList){
      if(save.resumeName==this.data.resumeName){
        return true;
      }
    }
    return false;
  }
}
