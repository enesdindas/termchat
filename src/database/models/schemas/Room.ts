import * as mongoose from 'mongoose';
import User from './User';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  users: [User],
  createdAt: Date,
});

export default mongoose.model('rooms', schema);
