import { StudyProgram } from "./studyProgram";
import {Review, ReviewStatus} from "./review";
import {User} from "./user";

const fakeDescription: string = 'Ipsum sapiente enim possimus assumenda veniam doloribus occaecati. Doloremque qui iusto dolores ipsam laboriosam voluptatum eius soluta. Quaerat beatae ea perferendis alias aliquid voluptatum. Qui assumenda et aspernatur quo sed explicabo. Aut voluptate error suscipit.';


export const STUDY_PROGRAMS: StudyProgram[] = [
  { id: '1', name: 'Bioengineering', description: fakeDescription },
  { id: '2', name: 'Data Analysis Technologies', description: fakeDescription  },
  { id: '3', name: 'Information Systems', description: fakeDescription  },
  { id: '4', name: 'Information Technologies', description: fakeDescription  },
  { id: '5', name: 'Mathematics of Modern Technologies', description: fakeDescription },
  { id: '6', name: 'Multimedia Design', description: fakeDescription },
  { id: '7', name: 'Software Engineering', description: 'labadiena' }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    key: 1,
    content: 'I like very good, yes',
    author: {
      id: '20142014',
      username: 'Bobby',
      password: 'Bobby',
      firstName: 'Bob',
      lastName: 'RectAngular',
      email: 'bobbyB@gmail.com',
      role: 'student',
      studyProgram: STUDY_PROGRAMS[6],
      token: ''
    },
    status: ReviewStatus.APPROVED
  },
  {
    id: 2,
    key: 1,
    content: 'I don\'t like very bad, no',
    author: {
      id: '20122012',
      username: 'jonas123',
      password: 'jonas123',
      firstName: 'Jonas',
      lastName: 'Jonauskas',
      email: 'jonas@gmail.com',
      role: 'student',
      studyProgram: STUDY_PROGRAMS[2],
      token: ''
    },
    status: ReviewStatus.REJECTED
  },
  {
    id: 3,
    key: 2,
    content: 'Is  ok',
    author: {
      id: '20132013',
      username: 'deanearwicker',
      password: 'deanearwicker',
      firstName: 'Steve',
      lastName: 'Fox',
      email: 'stevefox@gmail.com',
      role: 'student',
      studyProgram: STUDY_PROGRAMS[5],
      token: ''
    },
    status: ReviewStatus.PENDING
  },
];

export const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'Adminaitis',
    email: 'admin@vilniustech.lt',
    role: 'admin',
    token: 'asdasdasdasd'
  },
  {
    id: '2',
    username: 'student',
    password: 'student',
    firstName: 'Student',
    lastName: 'Studentaitis',
    email: 'student@vilniustech.lt',
    role: 'student',
    token: 'sdsdsdsdsdsdsd'
  }
]
