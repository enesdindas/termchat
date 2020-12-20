import { IUser } from './interfaces/User';

class User {
  private _UserModel: IUser;

  constructor(model: IUser) {
    this._UserModel = model;
  }
  get name(): string {
    return this._UserModel.name;
  }
}
Object.seal(User);
export default User;
