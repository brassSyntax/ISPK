import {StudyProgram} from "./studyProgram";

export interface User {
  id: string,
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  studyProgram?: StudyProgram,
  token: string
}
