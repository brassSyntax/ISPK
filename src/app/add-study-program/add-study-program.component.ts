import {Component, Inject, Input, OnInit} from '@angular/core';
import {StudyProgram} from "../studyProgram";

@Component({
  selector: 'app-add-study-program',
  templateUrl: './add-study-program.component.html',
  styleUrls: ['./add-study-program.component.css']
})
export class AddStudyProgramComponent implements OnInit {

  studyPrograms: Array<StudyProgram> = [];
  programName: string = '';
  programDescription: string = '';
  programID: string = '99999';

  constructor() {}


  ngOnInit(): void {
  }
  onSubmit() {
    let temp2 = localStorage.getItem('study_programs');
    if(temp2) {
      this.studyPrograms = JSON.parse(temp2);
    }

      let objektas = {
        id:this.programID,
        name: this.programName,
        description: this.programDescription
      }

      this.studyPrograms.push(objektas);
      localStorage.setItem('study_programs', JSON.stringify(this.studyPrograms));
      console.log(objektas);
    }

}
