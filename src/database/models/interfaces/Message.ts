import mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
  _id?: string;
  encrypted_text: string;
  sender_id: string;
  room_id: string;
  createdAt: Date;
}
