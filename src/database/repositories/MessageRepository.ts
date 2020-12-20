import { IMessage } from '../models/interfaces/Message';
import MessageSchema from '../models/schemas/Message';
import RepositoryBase from './base/RepositoryBase';

class MessageRepository extends RepositoryBase<IMessage> {
  constructor() {
    super(MessageSchema);
  }
}

Object.seal(MessageRepository);
export = MessageRepository;
