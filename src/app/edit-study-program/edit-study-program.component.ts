import {Component, Input, OnInit} from '@angular/core';
import {StudyProgram} from "../studyProgram";

@Component({
  selector: 'app-edit-study-program',
  templateUrl: './edit-study-program.component.html',
  styleUrls: ['./edit-study-program.component.css']
})
export class EditStudyProgramComponent implements OnInit  {

  studyPrograms: Array<StudyProgram> = [];
  programName: string = '';
  programDescription: string = '';
  programID: string = '';
  arrayEl:number = 15;

  constructor() {}

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('viduj', this.arrayEl);
    let temp2 = localStorage.getItem('study_programs');
    if(temp2) {
      this.studyPrograms = JSON.parse(temp2);
    }

    this.studyPrograms[this.arrayEl] = {
      id:this.programID,
      name: this.programName,
      description: this.programDescription
    }
    //console.log(this.arrayEl);

    /*this.studyPrograms.push(objektas);
    localStorage.setItem('study_programs', JSON.stringify(this.studyPrograms));
    console.log(objektas);*/
  }

  setArrayEl(index:number){
    this.arrayEl = index;
    console.log(index);
    console.log(this.arrayEl);
  }
}
