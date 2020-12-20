import mongoose from 'mongoose';

export interface IRoom extends mongoose.Document {
  _id?: string;
  name: string;
  user_ids: string[];
  message_ids: string[];
  createdAt: Date;
}
