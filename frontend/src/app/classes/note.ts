import { ObjectId } from 'mongoose';

export interface Note {
  text: string;
  date: number;
  canShow: boolean;
  welcomeNote: boolean;
  _id?: ObjectId;
}
