import { IUser } from './interfaces/User';

class User {
  private _UserModel: IUser;

  constructor(model: IUser) {
    this._UserModel = model;
  }
  public get name(): string {
    return this._UserModel.name;
  }

  // public sendMessage(): void {
  //   this._UserModel.name;
  // }
}
Object.seal(User);
export default User;
