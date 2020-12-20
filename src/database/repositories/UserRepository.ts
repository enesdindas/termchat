import { IUser } from '../models/interfaces/User';
import UserSchema from '../models/schemas/User';
import RepositoryBase from './base/RepositoryBase';

class UserRepository extends RepositoryBase<IUser> {
  constructor() {
    super(UserSchema);
  }
}

Object.seal(UserRepository);
export = UserRepository;
