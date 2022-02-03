import {Component, OnInit, SimpleChanges} from '@angular/core';
import { StudyProgram } from "../studyProgram";
import {REVIEWS, STUDY_PROGRAMS} from "../mock-data";
import {Review} from "../review";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddStudyProgramComponent} from "../add-study-program/add-study-program.component";

@Component({
  selector: 'app-study-program-display',
  templateUrl: './study-program-display.component.html',
  styleUrls: ['./study-program-display.component.css']
})
export class StudyProgramDisplayComponent implements OnInit {
  studyPrograms: StudyProgram[] = [];
  reviews: Review[] = [];
  selectedIndex = 0;

  constructor(public dialog: MatDialog) {
    let temp = localStorage.getItem('study_programs');
    if(temp) {
      this.studyPrograms = JSON.parse(temp);
    }else {
      this.studyPrograms = STUDY_PROGRAMS;
      localStorage.setItem('study_programs', JSON.stringify(this.studyPrograms));
    }

    let temp2 = localStorage.getItem('reviews');
    if(temp2) {
      this.reviews = JSON.parse(temp2);
    }else {
      this.reviews = REVIEWS;
      localStorage.setItem('reviews', JSON.stringify(this.reviews));
    }
  }

  isReviewsEmpty(index: number): boolean {
    let revs = this.studyPrograms[index].reviews;

    return (typeof revs === undefined || revs!.length <= 0);
  }

  ngOnInit(): void {
    this.studyPrograms.forEach(program => {
      program.reviews = this.reviews.filter(review => review.key.toString() === program.id);
    });
  }

  addStudyProgram(){
    this.dialog.open(AddStudyProgramComponent);
  }

  deleteStudyProgram(i:number){
    this.selectedIndex = i ;
    let temp2 = localStorage.getItem('study_programs');
    if(temp2) {
      this.studyPrograms = JSON.parse(temp2);
    }
    this.studyPrograms.splice(this.selectedIndex,1);
    localStorage.setItem('study_programs', JSON.stringify(this.studyPrograms));

  }



}
