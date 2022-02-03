import {Component, Inject, OnInit} from '@angular/core';
import { StudyProgram } from "../studyProgram";
import {REVIEWS, STUDY_PROGRAMS} from "../mock-data";
import {Review} from "../review";
import {MatDialog} from "@angular/material/dialog";
import {AddStudyProgramComponent} from "../add-study-program/add-study-program.component";
import {EditStudyProgramComponent} from "../edit-study-program/edit-study-program.component";
import {map} from "rxjs";
import {AccountService} from "../services/account.service";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-study-program-display',
  templateUrl: './study-program-display.component.html',
  styleUrls: ['./study-program-display.component.css']
})
export class StudyProgramDisplayComponent implements OnInit {
  studyPrograms: StudyProgram[] = [];
  reviews: Review[] = [];
  selectedIndex = 0;
  isUserAdmin: boolean = false;

  listData=[];


  constructor(public dialog: MatDialog, public object:EditStudyProgramComponent, public account: AccountService,
              public storage:StorageService) {
    this.account.user
      .pipe(map(() => {
        if(this.account.userValue?.role === 'admin') {
          this.isUserAdmin = true;
          console.log(this.isUserAdmin);
        }
        else {
          this.isUserAdmin = false;
        }
      }))
      .subscribe();
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


    this.loadData();
  }

  async loadData(){
    this.listData = await this.storage.get('key');
    console.log(this.listData);
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

  editStudyProgram(i:number){
    this.dialog.open(EditStudyProgramComponent);
    this.object.setArrayEl(i);
  }



}
