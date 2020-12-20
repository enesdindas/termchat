import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  encrypted_text: String,
  sender_id: String,
  room_id: String,
  createdAt: Date,
});

export default mongoose.model('messages', schema);
