import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  email: String,
  password: String,
  name: String,
  username:  String,
  message_ids: [String],
  room_ids: [String],
  createdAt: Date,
});

export default mongoose.model('users', schema);
