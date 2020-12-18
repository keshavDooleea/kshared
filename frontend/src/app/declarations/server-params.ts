import { Note } from '../classes/Note';

// export const SERVER_URL = 'https://kshared.herokuapp.com/';
export const SERVER_URL = 'http://localhost:5000/';

export interface ServerResponse {
  status: number;
  message: string;
  token?: string;
  username?: string;
  id?: string;
  dateAccCreated: string;
  currentText: string;
  noteList: Note[];
  stars: number;
}
