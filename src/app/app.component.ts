import { Component } from '@angular/core';
import {ReviewInputFormComponent} from "./review-input-form/review-input-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISPK';

  constructor(public dialog: MatDialog) {
  }

  reviewButtonClick() {
    let dialogRef = this.dialog.open(ReviewInputFormComponent, {
      data: { programName: 'Software Engineering'} // TODO: change to active user's studyProgram
      // height: '400px',
      // width: '640px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

    //dialogRef.close();
  }
}
