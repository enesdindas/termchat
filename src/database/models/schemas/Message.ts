import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  encryptedText: String,
  senderId: String,
  roomId: String,
  createdAt: Date,
});

export default mongoose.model('messages', schema);
