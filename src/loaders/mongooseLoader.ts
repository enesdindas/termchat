import {
  MicroframeworkLoader,
  MicroframeworkSettings,
} from 'microframework-w3tec';

import { env } from '../env';
import mongoose from 'mongoose';

export const mongooseLoader: MicroframeworkLoader = async (
  settings: MicroframeworkSettings | undefined
) => {
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  const connection = await mongoose.connect(
    `mongodb+srv://${env.mongodb.username}:${env.mongodb.password}@${env.mongodb.host}/${env.mongodb.database}?retryWrites=true&w=majority`,
    connectionOptions
  );

  if (settings) {
    settings.setData('connection', connection);
    settings.onShutdown(() => connection.connection.close());
  }
};
