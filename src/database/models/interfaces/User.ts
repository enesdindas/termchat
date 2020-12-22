import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  _id?: string;
  email: string;
  password: string;
  name: string;
  username:  string;
  sharedSecretKey:  string;
  createdAt: Date;
}
