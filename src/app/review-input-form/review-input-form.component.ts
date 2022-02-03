import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StorageService} from "../services/storage.service";
import {AccountService} from "../services/account.service";
import {map} from "rxjs";
import {StudyProgram} from "../studyProgram";
import {Review} from "../review";

@Component({
  selector: 'app-review-input-form',
  templateUrl: './review-input-form.component.html',
  styleUrls: ['./review-input-form.component.css']
})
export class ReviewInputFormComponent implements OnInit {

  programName?: string = '';
  programKey?: string = '';
  reviewContent: string = '';

  @Input() programId = 1;

  constructor(public dialogRef: MatDialogRef<ReviewInputFormComponent>,
              private account: AccountService,
              private storage: StorageService) {
    this.account.user
      .pipe(map(x => {
        if(x) {
          this.programName = x.studyProgram?.name;

          const programs: StudyProgram[] = JSON.parse(localStorage.getItem('study_programs') || '{}');

          this.programKey = programs.find(program => program.name === this.programName)?.id;
        }
      }));
  }

  // TODO: add submission logic
  onSubmit() {
    this.dialogRef.close();

    this.dialogRef.afterClosed().subscribe(() => {
      console.log('submitted: ');
      console.log(this.reviewContent);

      let temp: Review[] = JSON.parse(localStorage.getItem('reviews') || '{}');
      temp.push({
        id: temp.length + 1,
        key: parseInt(this.programKey || ''),
        content: this.reviewContent,
      })

      //localStorage.setItem('reviews', )
    })

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
