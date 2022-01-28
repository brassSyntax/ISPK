import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-review-input-form',
  templateUrl: './review-input-form.component.html',
  styleUrls: ['./review-input-form.component.css']
})
export class ReviewInputFormComponent implements OnInit {

  @Input() programName: string = '';

  constructor(public dialogRef: MatDialogRef<ReviewInputFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {programName: string}) {
    this.programName = data.programName;
  }

  closeDialog() { // TODO: add submission logic
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
