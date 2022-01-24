import {Review} from "./review";

export interface StudyProgram {
  id: number;
  name: string;
  reviews?: Review[];
}
