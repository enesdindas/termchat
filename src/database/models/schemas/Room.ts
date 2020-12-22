import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  userIds: [String],
  messageIds: [String],
  createdAt: Date,
});

export default mongoose.model('rooms', schema);
