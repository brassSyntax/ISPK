import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-review-input-form',
  templateUrl: './review-input-form.component.html',
  styleUrls: ['./review-input-form.component.css']
})
export class ReviewInputFormComponent implements OnInit {

  @Input() programName: string = '';
  reviewContent: string = '';

  constructor(public dialogRef: MatDialogRef<ReviewInputFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {programName: string},
              private storage: StorageService) {
    this.programName = data.programName;
  }

  // TODO: add submission logic
  onSubmit() {
    console.log('submitted');
    console.log(this.reviewContent);
    this.dialogRef.close();

    // this.dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   console.log(this.reviewContent);
    //
    //   // this.storage.keys()?.then(result => {
    //   //   console.log(result);
    //   //
    //   //   this.storage.set('key' + (result.length + 1), 'value');
    //   // });
    // });
  }

  ngOnInit(): void {
  }

}
