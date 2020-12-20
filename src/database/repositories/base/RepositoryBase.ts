import mongoose = require('mongoose');
import IRead from '../interfaces/Read';
import IWrite from '../interfaces/Write';

export default class RepositoryBase<T extends mongoose.Document>
  implements IRead<T>, IWrite<T> {
  private _model: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this._model = schemaModel;
  }

  public async create(item: T): Promise<mongoose.Document[]> {
    try {
      return await this._model.create([item]);
    } catch (error) {
      return error;
    }
  }

  public async retrieve(): Promise<mongoose.Document[]> {
    try {
      const res = await this._model.find();
      return res;
    } catch (error) {
      return error;
    }
  }

  public async update(_id: mongoose.Types.ObjectId, item: T): Promise<mongoose.Document[]> {
    try {
      return await this._model.update({ _id }, item, { multi: true });
    } catch (error) {
      return error;
    }
  }

  public async delete(_id: string): Promise<object> {
    try {
      const res =  await this._model.deleteOne({ _id: this.toObjectId(_id) });
      return { deletedCount: res.deletedCount };
    } catch (error) {
      return error;
    }
  }

  public async findById(_id: string): Promise<mongoose.Document> {
    try {
      const res = await this._model.findById(_id);
      return res;
    } catch (error) {
      return error;
    }
  }

  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }
}
