import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  email: String,
  password: String,
  name: String,
  username:  String,
  sharedSecretKey: String,
  createdAt: Date,
});

export default mongoose.model('users', schema);
