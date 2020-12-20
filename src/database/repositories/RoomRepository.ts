import { IRoom } from '../models/interfaces/Room';
import RoomSchema from '../models/schemas/Room';
import RepositoryBase from './base/RepositoryBase';

class RoomRepository extends RepositoryBase<IRoom> {
  constructor() {
    super(RoomSchema);
  }
}

Object.seal(RoomRepository);
export = RoomRepository;
