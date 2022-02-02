import {Review} from "./review";

export interface StudyProgram {
  id: string;
  name: string;
  description: string;
  reviews?: Review[];
}

