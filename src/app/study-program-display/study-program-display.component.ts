import { Component, OnInit } from '@angular/core';
import { StudyProgram } from "../studyProgram";
import {REVIEWS, STUDY_PROGRAMS} from "../mock-data";
import {Review} from "../review";

@Component({
  selector: 'app-study-program-display',
  templateUrl: './study-program-display.component.html',
  styleUrls: ['./study-program-display.component.css']
})
export class StudyProgramDisplayComponent implements OnInit {
  studyPrograms: StudyProgram[] = STUDY_PROGRAMS;
  reviews: Review[] = REVIEWS;

  selectedIndex = 0;

  constructor() { }

  isReviewsEmpty(index: number): boolean {
    let revs = this.studyPrograms[index].reviews;

    return (typeof revs === undefined || revs!.length <= 0);
  }

  ngOnInit(): void {
    this.studyPrograms.forEach(program => {
      program.reviews = this.reviews.filter(review => review.key === program.id);
    });
  }

}
