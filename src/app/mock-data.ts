import { StudyProgram } from "./studyProgram";
import {Review} from "./review";

export const STUDY_PROGRAMS: StudyProgram[] = [
  { id: 1, name: 'Bioengineering' },
  { id: 2, name: 'Data Analysis Technologies' },
  { id: 3, name: 'Information Systems' },
  { id: 4, name: 'Information Technologies' },
  { id: 5, name: 'Mathematics of Modern Technologies'},
  { id: 6, name: 'Multimedia Design'},
  { id: 7, name: 'Software Engineering'}
];

export const REVIEWS: Review[] = [
  { id: 1, key: 1, content: 'I like very good, yes'},
  { id: 2, key: 1, content: 'I don\'t like very bad, no'},
  { id: 3, key: 2, content: 'Is  ok'}
];
