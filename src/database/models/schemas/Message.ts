import * as mongoose from 'mongoose';
import User from './User';

const Schema = mongoose.Schema;

const schema = new Schema({
  encrypted_text: String,
  sender: User,
  receivers: [User],
  createdAt: Date,
});

export default mongoose.model('messages', schema);
