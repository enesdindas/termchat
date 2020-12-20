import mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
  _id?: string;
  encrypted_text: string;
  sender: string;
  receivers: number[];
  createdAt: Date;
}
