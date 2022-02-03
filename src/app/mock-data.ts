import { StudyProgram } from "./studyProgram";
import {Review} from "./review";
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
  { id: 1, key: 1, content: 'I like very good, yes'},
  { id: 2, key: 1, content: 'I don\'t like very bad, no'},
  { id: 3, key: 2, content: 'Is  ok'}
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
