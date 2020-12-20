import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  user_ids: [String],
  message_ids: [String],
  createdAt: Date,
});

export default mongoose.model('rooms', schema);
