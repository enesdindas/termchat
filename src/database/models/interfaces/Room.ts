import mongoose from 'mongoose';

export interface IRoom extends mongoose.Document {
  _id?: string;
  name: string;
  users: string;
  createdAt: Date;
}
