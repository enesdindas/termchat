import { IUser } from '../models/interfaces/User';
import User from '../models/schemas/User';
import UserSchema from '../models/schemas/User';
import RepositoryBase from './base/RepositoryBase';
import mongoose from 'mongoose';

class UserRepository extends RepositoryBase<IUser> {
  constructor() {
    super(UserSchema);
  }

  public async login(username: string): Promise<mongoose.Document> {
    try {
      return await User.findOne({ username });
    } catch (error) {
      return error;
    }
  }
}

Object.seal(UserRepository);
export = UserRepository;
