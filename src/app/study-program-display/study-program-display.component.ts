import { Component, OnInit } from '@angular/core';
import { StudyProgram } from "../studyProgram";
import {STUDY_PROGRAMS} from "../mock-data";

@Component({
  selector: 'app-study-program-display',
  templateUrl: './study-program-display.component.html',
  styleUrls: ['./study-program-display.component.css']
})
export class StudyProgramDisplayComponent implements OnInit {
  studyPrograms: StudyProgram[] = STUDY_PROGRAMS;

  constructor() { }

  ngOnInit(): void {
  }

}
