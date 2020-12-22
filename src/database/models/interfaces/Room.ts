import mongoose from 'mongoose';

export interface IRoom extends mongoose.Document {
  _id?: string;
  name: string;
  userIds: string[];
  messageIds: string[];
  createdAt: Date;
}
