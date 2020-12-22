import mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
  _id?: string;
  encryptedText: string;
  senderId: string;
  roomId: string;
  createdAt: Date;
}
